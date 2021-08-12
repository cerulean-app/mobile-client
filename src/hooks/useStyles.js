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
      marginRight: 5,
      marginLeft: 5,
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
      color: darkMode ? '#fff' : '#000',
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
      color: '#fff',
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
    mainTitle: {
      fontSize: 28,
      color: darkMode ? '#eee' : '#333',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    actionButton: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      position: 'absolute',
      bottom: 20,
      right: 20,
      height: 70,
      backgroundColor: '#2b79ff',
      borderRadius: 100,
    },
    todoItem: {
      borderRadius: 7,
      width: '100%',
      margin: 10,
      backgroundColor: darkMode ? '#555' : '#fff',
      elevation: 7,
      padding: 10,
      height: 100,
    },
    subTitle: {
      fontSize: 26,
      color: darkMode ? '#eee' : '#333',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 5,
    },
    calendarModal: {
      backgroundColor: darkMode ? '#555' : '#eee',
      borderRadius: 4,
      padding: 10,
      height: 250,
    },
    calendarAddBtn: {
      width: 120,
      fontSize: 16,
      backgroundColor: '#4BB543',
    },
    removeDate: {
      position: 'absolute',
      top: 5,
      right: 20,
    },
    calendarButton: {
      color: darkMode ? '#fff' : '#333',
    },
    createField: {
      height: 40,
      width: '100%',
      padding: 4,
      margin: 5,
      flexDirection: 'row',
    },
    createFieldIcon: {
      alignSelf: 'center',
    },
    createFieldText: {
      width: '100%',
      height: 40,
      marginTop: 5,
      marginHorizontal: 8,
      color: darkMode ? '#fff' : '#333',
    },
    createFieldInput: {
      height: 26,
      width: '100%',
      padding: 0,
      margin: 0,
      marginHorizontal: 8,
      fontSize: 14,
      alignSelf: 'center',
    },
    horizontalLine: {
      borderBottomColor: darkMode ? '#fff' : '#bbb',
      borderBottomWidth: 1,
      marginVertical: 10,
    },
    pickerItem: {
      color: darkMode ? '#fff' : '#bbb',
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
