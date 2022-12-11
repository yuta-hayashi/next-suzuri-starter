import Head from 'next/head'
import { useLoggedinOnlyPage } from '../hooks/useLoggedInOnlyPage'
import { useProducts } from '../hooks/suzuri-api/useSuzuriApi'

export default function TryApi() {
  const { session, status } = useLoggedinOnlyPage()
  const { products, isLoading, isError } = useProducts()
  return (
    <>
      <Head>
        <title>Try API Page</title>
      </Head>
      {status === 'loading' ? (
        <p>Loading or not authenticated...</p>
      ) : (
        <div>
          <h1>Try SUZURI API</h1>
          {JSON.stringify(products)}
        </div>
      )}
    </>
  )
}
