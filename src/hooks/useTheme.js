import { useColorScheme } from 'react-native'
import useLocalStorage from './useLocalStorage'

/*
 * Hook that allows more themes other than
 * light or dark to be stored, as well as
 * allowing them to be changed into the app's
 * storage through a setting.
 */
const useTheme = () => {
  // Get the current color scheme.
  const colorScheme = useColorScheme()

  // Check if we already had a saved theme.
  const [storedScheme, setStoredScheme] = useLocalStorage('theme')

  return [
    storedScheme === null ? colorScheme :
      (storedScheme === 'dark' ? 'dark' : 'light'),
    setStoredScheme,
  ]
}

export default useTheme
