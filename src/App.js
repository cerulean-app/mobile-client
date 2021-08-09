import React, { useLayoutEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import SettingsScreen from './screens/SettingsScreen'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import useStyles from './hooks/useStyles'
import RegisterScreen from './screens/RegisterScreen'
import { StatusBar } from 'react-native'

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  const [styles] = useStyles()

  useLayoutEffect(() => {
    StatusBar.setBackgroundColor('#222')
  }, [])

  return (
    <NavigationContainer theme={styles.theme()}>
      <Navigator
        initialRouteName='Loading' // TODO: Do this another way.
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#333', elevation: 6, shadowColor: '#000' },
        }}
      >
        <Screen name='Loading' component={LoadingScreen} />
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Login' component={LoginScreen} />
        <Screen name='Register' component={RegisterScreen} />
        <Screen name='Settings' component={SettingsScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default App
