import useTheme from './useTheme'
import { StyleSheet } from 'react-native'
import { DefaultTheme } from '@react-navigation/native'

const useStyles = () => {
  const [theme, setTheme] = useTheme()

  // Dark mode boolean.
  const darkMode = theme === 'dark'

  const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: darkMode ? '#000' : '#fff',
    },
    appBackground: {
      backgroundColor: darkMode ? '#333' : '#eee',
    },
    fontColor: {
      color: darkMode ? '#eee' : '#000',
    },
    settingsButton: {
      padding: 10,
      marginRight: 10,
    },
    returnButton: {
      padding: 10,
      marginLeft: 10,
    },
    loadingScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  return [
    {
      ...styles,
      scheme: () => theme, // Method to not mistake with actual styles.
      theme: () => ({
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: darkMode ? '#444' : '#eee',
        },
      }),
    },
    setTheme,
  ]
}

export default useStyles
