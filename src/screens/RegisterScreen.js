import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import useStyles from '../hooks/useStyles'
import ReturnButton from '../components/ReturnButton'
import { Button } from 'react-native-vector-icons/MaterialIcons'
import { backendUri } from '../config.json'
import useLocalStorage from '../hooks/useLocalStorage'

const RegisterScreen = ({ navigation }) => {
  const [token, setToken] = useLocalStorage('token')
  const [styles] = useStyles()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <ReturnButton navigation={navigation} />,
    })
  }, [navigation])

  useEffect(() => {
    if (token) navigation.navigate('Home')
  }, [username, email, password, error, token])

  const submit = async () => {
    if (!(username && email && password)) return setError('Missing fields.')

    // Username verification.
    if (!/^[a-zA-Z0-9_]{4,}$/.test(username)) {
      // Invalid username.
      setUsername('')
      setError('Username must only contain letters, numbers, underscores and must have a minimum of 4 characters.')
      return
    }

    // E-mail verification.
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
      // Invalid e-mail.
      setEmail('')
      setError('Invalid e-mail.')
      return
    }

    // Password verification.

    // Login via the backend.
    const body = JSON.stringify({
      username,
      password,
      email,
      cookie: false,
    })

    try {
      const res = await fetch(backendUri + 'register', { method: 'POST', body })
      if (res.ok) return setToken((await res.json()).token)
      else if (res.status === 409) {
        console.log(await res.text())
      } else {
        console.log(await res.text())
      }
    } catch (e) {
      setError('Please check your internet connection.')
      return console.error(e)
    }

    // Invalid credentials.
    setPassword('')
    setError('Invalid credentials.')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Register</Text>
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
          style={{ ...styles.textInput, borderBottomColor: error && !email ? '#ed4337' : 'gray' }}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={styles.scheme() === 'dark' ? '#bbb' : 'gray'}
          placeholder='E-mail'
          autoCompleteType='email'
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
      <View style={styles.btnWrapper}>
        <Button name='how-to-reg' style={styles.registerBtn} onPress={submit} size={20} iconStyle={{ marginRight: 5 }}>
          <Text style={styles.btnText}>Register</Text>
        </Button>
      </View>
    </View>
  )
}

export default RegisterScreen
