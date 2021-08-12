import React, { useLayoutEffect, useState, Fragment, useEffect } from 'react'
import { Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-vector-icons/Ionicons'
import useStyles from '../hooks/useStyles'
import { backendUri } from '../config.json'
import useLocalStorage from '../hooks/useLocalStorage'

const LoginScreen = ({ navigation }) => {
  const [token, setToken] = useLocalStorage('token')
  const [styles] = useStyles()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cerulean',
      headerLeft: () => <Fragment />,
    })
  }, [navigation])

  useEffect(() => {
    if (token) navigation.navigate('Home')
  }, [username, password, error, token])

  const submit = async () => {
    if (!(username && password)) return setError('Missing fields.')

    // Login via the backend.
    const body = JSON.stringify({
      username,
      password,
      cookie: false,
    })

    try {
      const res = await fetch(backendUri + 'login', { method: 'POST', body })
      if (res.ok) {
        setUsername('')
        setPassword('')
        return setToken((await res.json()).token)
      }
    } catch (e) {
      setError('Please check your internet connection.')
      return console.error(e)
    }

    // Invalid credentials.
    setError('Invalid credentials.')
  }

  const handleRegister = () => {
    console.log('Register')
    navigation.navigate('Register')
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.loginTitle}>Login</Text>
        <View style={styles.form}>
          <TextInput
            style={{ ...styles.textInput, borderBottomColor: error && !username ? '#ed4337' : 'gray' }}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={styles.scheme() === 'dark' ? '#bbb' : 'gray'}
            placeholder='Username'
            autoCompleteType='username'
          />
          <TextInput
            style={{ ...styles.textInput, borderBottomColor: error && !password ? '#ed4337' : 'gray' }}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={styles.scheme() === 'dark' ? '#bbb' : 'gray'}
            placeholder='Password'
            autoCompleteType='password'
          />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Text style={styles.registerSuggestion}>
        Don't have an account? <Text style={styles.link} onPress={handleRegister}>Register</Text>.
        </Text>
        <View style={styles.btnWrapper}>
          <Button name='log-in-outline' style={styles.loginBtn} onPress={submit} size={20} iconStyle={{ marginRight: 5 }}>
            <Text style={styles.btnText}>Login</Text>
          </Button>
        </View>
      </View>
    </>
  )
}

export default LoginScreen
