import {githubApp} from "../lib/octokit";
import { reviewQueue } from "../lib/redis";
import {prisma, Provider} from "@rin/database";

export function registerPRWebhook(){
    githubApp.webhooks.on('pull_request.opened',handlePR);
    githubApp.webhooks.on('pull_request.synchronize',handlePR);
    githubApp.webhooks.on('pull_request.reopened',handlePR); 
}

async function handlePR({payload}:any){
    const installationId=payload.installationId?.id;
    if(!installationId) return;

    // find installationId in db
    const installation=await prisma.installation.findUnique({
        where:{githubInstallationId:String(installationId)},
        include:{user:{include:{apiKeys:true}}}
    })

    if(!installation || !installation?.active) return;

    // get user preferred provider with api
    const activeKey=installation.user.apiKeys.find(k=>k.isActive);
    const provider=activeKey?.provider || "GEMINI";

    await reviewQueue.add("review-pr",{
        installationId:installation.id,
        githubInstallationId:installationId,
        prNumber:payload.pull_request.number,
        repoName:payload.repository.full_name,
        prTitle:payload.pull_request.title,
        prDescription:payload.pull_request.body || "",
        provider,
        encryptedApiKey:activeKey?.encryptedKey || null,
    },{
        attempts:3,
        backoff:{
            type:"exponential",
            delay:2000,
        },
    })
    console.log(`Queued review for PR #${payload.pull_request.number}`)
}