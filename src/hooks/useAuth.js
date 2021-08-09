import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import { backendUri } from '../config.json'

// TODO: Use global state (Context).
const useAuth = () => {
  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    // It's still loading.
    if (token === false) return

    // Check if the token is valid.
    fetch(backendUri + 'todos', { headers: { 'Authorization': token, 'Content-Type': 'application/json' } })
        .then((res) => {
          console.log('Request to /todos finished. Status: ' + res.status)
          // The token is invalid. It's as if it didn't exist.
          if (res.status === 401) return setToken(null)
        }).catch((e) => {
          setToken(null)
          console.error(e)
        }) // Invalid token.
  }, [token])

  return token
}

export default useAuth
