import { useSession } from 'next-auth/react'
import Router from 'next/router'

export const useLoggedinOnlyPage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push({
        pathname: '/api/auth/signin',
        query: {
          callbackUrl: window.location.href,
        },
      })
    },
  })
  return { session, status }
}
