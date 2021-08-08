import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
  const [storage, setStorage] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem(key)
        .then(setStorage)
        .catch(console.error)
  }, [storage])

  const updateStorage = (newValue) => {
    console.log(newValue)
    setStorage(newValue)
    AsyncStorage.setItem(key, newValue)
        .catch(console.error)
  }

  return [
    storage,
    updateStorage,
  ]
}

export default useLocalStorage
