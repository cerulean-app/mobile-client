import React, { useLayoutEffect } from 'react'
import { Switch } from 'react-native'
import useStyles from '../hooks/useStyles'
import ReturnButton from '../components/ReturnButton'
import LogoutButton from '../components/LogoutButton'

const SettingsScreen = ({ navigation }) => {
  const [styles, setTheme] = useStyles()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <ReturnButton navigation={navigation} />,
      headerRight: () => <LogoutButton navigation={navigation} />,
    })
  }, [navigation])

  return (
    <Switch
      style={styles.switch}
      onValueChange={(b) => setTheme(b ? 'dark' : 'light')}
      value={styles.scheme() === 'dark'}
    />
  )
}

export default SettingsScreen
