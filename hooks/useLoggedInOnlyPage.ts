import { useSession } from 'next-auth/react'
import Router from 'next/router'

export const useLoggedinOnlyPage = () => {
  const { status } = useSession({
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
  return status
}
