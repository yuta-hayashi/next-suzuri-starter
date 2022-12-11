import { useSession } from 'next-auth/react'
import Router from 'next/router'

export default function Admin() {
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

  if (status === 'loading') {
    return 'Loading or not authenticated...'
  }

  return 'User is logged in'
}
