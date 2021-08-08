import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'
import SettingsButton from '../components/SettingsButton'

const LoginScreen = ({ navigation }) => {
  const styles = useStyles()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cerulean',
      headerRight: () => <SettingsButton navigation={navigation} />,
    })
  }, [navigation])

  return (
    <View style={{ margin: 20 }}>
      <Text style={styles.fontColor}>Hello, world</Text>
    </View>
  )
}

export default LoginScreen
