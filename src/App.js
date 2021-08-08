import React, { useEffect, useState } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import useStyles from './hooks/useStyles'
import SettingsScreen from './screens/SettingsScreen'
import LoginScreen from './screens/LoginScreen'
import useAuth from './hooks/useAuth'
import LoadingScreen from './screens/LoadingScreen'

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  const [initialRoute, setInitialRoute] = useState('Loading')
  const [styles] = useStyles()
  const token = useAuth()

  useEffect(() => {
    // Token is still being retrieved.
    if (token === false) return

    // If user is logged in.
    if (token) {
      setInitialRoute('Home')
    } else { // If user isn't logged in.
      setInitialRoute('Login')
    }
  }, [token])

  return (
    <NavigationContainer theme={styles.theme()}>
      <Navigator
        initialRouteName={initialRoute} // TODO: Do this another way.
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#333' },
        }}
      >
        <Screen name='Loading' component={LoadingScreen} />
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Login' component={LoginScreen} />
        <Screen name='Settings' component={SettingsScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default App
