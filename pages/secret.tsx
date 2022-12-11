import { useLoggedinOnlyPage } from '../hooks/useLoggedInOnlyPage'

export default function Admin() {
  const status = useLoggedinOnlyPage()

  if (status === 'loading') {
    return 'Loading or not authenticated...'
  }

  return 'User is logged in'
}
