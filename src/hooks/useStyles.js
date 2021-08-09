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
    settingsButton: {
      padding: 10,
      marginRight: 10,
    },
    returnButton: {
      padding: 10,
      marginLeft: 10,
    },
    loginTitle: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 50,
      color: darkMode ? '#eee' : '#000',
    },
    loadingScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      margin: 20,
      height: '100%',
    },
    form: {
      marginTop: 30,
    },
    textInput: {
      height: 50,
      margin: 5,
      fontSize: 16,
      padding: 0,
      borderBottomColor: 'gray',
      borderBottomWidth: 2,
    },
    loginBtn: {
      alignSelf: 'stretch',
      width: 120,
      height: 50,
      justifyContent: 'center',
    },
    registerBtn: {
      alignSelf: 'stretch',
      width: 140,
      height: 50,
      justifyContent: 'center',
    },
    btnWrapper: {
      position: 'absolute',
      bottom: 40,
      alignItems: 'flex-end',
      flex: 1,
      width: '100%',
      right: 0,
    },
    btnText: {
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      color: '#fff',
      fontSize: 20,
      marginRight: 5,
    },
    errorText: {
      color: '#ed4337',
      margin: 5,
    },
    registerSuggestion: {
      fontSize: 14,
      color: darkMode ? '#aaa' : '#000',
      margin: 5,
    },
    link: {
      color: '#2b79ff',
    },
    modal: {
      backgroundColor: darkMode ? '#555' : '#eee',
      borderRadius: 4,
      padding: 10,
      height: 200,
    },
    modalLogout: {
      backgroundColor: '#ed4337',
      width: 100,
      fontSize: 16,
    },
    modalCancel: {
      width: 100,
      fontSize: 16,
    },
    modalBtnText: {
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      color: darkMode ? '#fff' : '#000',
      fontSize: 16,
      marginRight: 5,
    },
    btnWrapperModal: {
      position: 'absolute',
      bottom: 0,
      alignItems: 'flex-end',
      flex: 1,
      flexDirection: 'row-reverse',
      width: '100%',
      right: 0,
      margin: 10,
    },
    modalText: {
      color: darkMode ? '#fff' : '#000',
      fontSize: 22,
      margin: 10,
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
