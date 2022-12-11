import Head from 'next/head'
import { useLoggedinOnlyPage } from '../hooks/useLoggedInOnlyPage'

export default function Secret() {
  const status = useLoggedinOnlyPage()
  return (
    <>
      <Head>
        <title>Secret Page</title>
      </Head>
      {status === 'loading' ? (
        <p>Loading or not authenticated...</p>
      ) : (
        <p>User is logged in.</p>
      )}
    </>
  )
}
