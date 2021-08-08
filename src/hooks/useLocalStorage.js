import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
  // Explicitly check if the value is false to know if it's loading.
  const [storage, setStorage] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem(key)
        .then(setStorage)
        .catch(console.error)
  }, [storage])

  const updateStorage = (newValue) => {
    console.log(newValue)
    setStorage(newValue)
    if (!newValue && newValue !== false) return AsyncStorage.removeItem(key)
    AsyncStorage.setItem(key, newValue)
        .catch(console.error)
  }

  return [
    storage,
    updateStorage,
  ]
}

export default useLocalStorage
