import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'

const LoadingScreen = ({ navigation }) => {
  const styles = useStyles()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  return (
    <View style={styles.loadingScreen}>
      <Text style={styles.fontColor}>Loading</Text>
    </View>
  )
}

export default LoadingScreen
