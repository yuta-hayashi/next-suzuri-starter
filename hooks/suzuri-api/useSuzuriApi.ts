import useSWR from 'swr'

const fetcher = (...args: any[]) =>
  // @ts-ignore
  fetch(...args, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  }).then((res) => res.json())

export const useProducts = () => {
  const { data, error, isLoading } = useSWR(
    'https://suzuri.jp/api/v1/products',
    fetcher
  )
  return {
    products: data,
    isLoading: isLoading,
    isError: error,
  }
}
