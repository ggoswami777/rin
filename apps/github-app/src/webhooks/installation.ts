import { prisma } from "@rin/database";
import { githubApp } from "../lib/octokit";

export function registerInstallationWebhook() {
  githubApp.webhooks.on("installation.created", async ({ payload }) => {
    const githubUserId = String(payload.sender.id);

    // find or create user
    let user = await prisma.user.findUnique({
      where: { githubId: githubUserId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          githubId: githubUserId,
          username: payload.sender.login,
          avatarUrl: payload.sender.avatar_url,
        },
      });
    }

    const account = payload.installation.account;
    if (!account) {
      console.error("Installation account is missing from payload");
      return;
    }

    const accountLogin =
      "login" in account ? account.login : account.slug || account.name || "";

    await prisma.installation.create({
      data: {
        userId: user.id,
        githubInstallationId: String(payload.installation.id),
        accountLogin,
        repoIds: payload.repositories?.map((r: any) => String(r.id)) || [],
      },
    });
    console.log(`Installation created for ${payload.sender.login}`);
  });
  
  githubApp.webhooks.on("installation.deleted", async ({ payload }) => {
    await prisma.installation.updateMany({
      where: {
        githubInstallationId: String(payload.installation.id),
      },
      data: { active: false },
    });
  });
}
