import React, { useLayoutEffect } from 'react'
import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'
import SettingsButton from '../components/SettingsButton'

const HomeScreen = ({ navigation }) => {
  const styles = useStyles()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cerulean',
      headerRight: () => <SettingsButton navigation={navigation} />,
    })
  }, [navigation])

  return (
    <Text style={styles.fontColor}>Hello, world</Text>
  )
}

export default HomeScreen
