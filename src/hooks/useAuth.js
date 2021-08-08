import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import { backendUri } from '../config.json'

const useAuth = () => {
  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    // It's still loading.
    if (token === false) return

    // Check if the token is valid.
    fetch(backendUri + 'todos', { headers: { Authorization: token } })
        .then((res) => {
          // The token is invalid. It's as if it didn't exist.
          if (res.status === 401) return setToken(null)
        }).catch(() => setToken(null)) // Invalid token.
  }, [token])

  return token
}

export default useAuth
