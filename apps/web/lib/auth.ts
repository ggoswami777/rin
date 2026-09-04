import type {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import {PrismaAdapter} from '@auth/prisma-adapter'
import {prisma} from '@rin/database'

export const authOptions:NextAuthOptions={
  adapter:PrismaAdapter(prisma) as any,
  providers:[
    GithubProvider({
      clientId:process.env.GITHUB_CLIENT_ID || '',
      clientSecret:process.env.GITHUB_CLIENT_SECRET || '',
      profile(profile){
        return{
          id:String(profile.id),
          githubId:String(profile.id),
          name:profile.name ?? profile.login,
          email:profile.email,
          image:profile.avatar_url,
          username:profile.login,
          avatar_url:profile.avatar_url,
        }
      },
    }),
  ],
  callbacks:{
    async session({session,user}){
      if(session.user){
        session.user.id=user.id
      }
      return session
    },
  },
  session: {
    strategy: 'database',
  },
}