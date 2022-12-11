import { useSession, signIn, signOut } from 'next-auth/react'

export const LoginButton = function () {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session)} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
