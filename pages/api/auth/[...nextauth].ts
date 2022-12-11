import NextAuth from 'next-auth'

export const authOptions = {
  session: { strategy: <'jwt'>'jwt' },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id
      session.access_token = token.accessToken
      return session
    },
    async jwt({
      token,
      user,
      account,
    }: {
      token: any
      user: any
      account: any
    }) {
      if (user) {
        token.id = user.id
      }

      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },
  },
  providers: [
    {
      id: 'suzuri',
      name: 'SUZURI',
      type: <'oauth'>'oauth',
      authorization: {
        url: 'https://suzuri.jp/oauth/authorize',
        params: { scope: 'read write' },
      },
      token: 'https://suzuri.jp/oauth/token',
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      userinfo: 'https://suzuri.jp/api/v1/user',
      profile(res: any) {
        return {
          id: res.user.id,
          name: res.user.name,
          email: res.user.email,
          image: res.user.avatarUrl,
        }
      },
    },
  ],
}

// @ts-ignore
export default NextAuth(authOptions)
