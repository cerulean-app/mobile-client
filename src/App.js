import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import useStyles from './hooks/useStyles'
import SettingsScreen from './screens/SettingsScreen'

const { Navigator, Screen } = createStackNavigator()

const App = () => {
  const [styles] = useStyles()

  // TODO: Check login info.
  const initialRoute = 'Home'

  return (
    <NavigationContainer theme={styles.theme()}>
      <Navigator
        initialRouteName={initialRoute} // TODO: This will vary between Login and Home.
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#333' },
        }}
      >
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Settings' component={SettingsScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default App
