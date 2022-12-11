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

  if (
    typeof window !== 'undefined' &&
    !sessionStorage.getItem('token') &&
    session?.accessToken
  ) {
    sessionStorage.setItem('token', session.accessToken)
  }
  return { session, status }
}
