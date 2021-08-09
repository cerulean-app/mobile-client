import React, { useLayoutEffect, useEffect } from 'react'
import { Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'
import useAuth from '../hooks/useAuth'

const LoadingScreen = ({ navigation }) => {
  const [styles] = useStyles()
  const token = useAuth()

  useEffect(() => {
    // Token is still being retrieved.
    if (token === false) return
    navigation.navigate(token ? 'Home' : 'Login')
  }, [token])

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
