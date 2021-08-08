import React, { useLayoutEffect } from 'react'
import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'
import ReturnButton from '../components/ReturnButton'

const SettingsScreen = ({ navigation }) => {
  const styles = useStyles()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <ReturnButton navigation={navigation} />,
    })
  }, [navigation])

  return (
    <Text style={styles.fontColor}>Hello, world</Text>
  )
}

export default SettingsScreen
