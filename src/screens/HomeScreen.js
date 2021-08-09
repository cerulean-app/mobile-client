import React, { useLayoutEffect, Fragment, useEffect, useState } from 'react'
import { Text } from 'react-native'
import useStyles from '../hooks/useStyles'
import SettingsButton from '../components/SettingsButton'
import useAuth from '../hooks/useAuth'
import { backendUri } from '../config.json'
import TodoItem from '../components/TodoItem'

const HomeScreen = ({ navigation }) => {
  const token = useAuth()
  const styles = useStyles()
  const [todos, setTodos] = useState([])
  console.log(todos)

  useEffect(() => {
    // Still loading.
    if (token === false) return
    else if (!token) return navigation.navigate('Login')

    // Retrieve all TODOs.
    fetch(backendUri + 'todos', { headers: { Authorization: token } })
        .then((res) => res.json())
        .then(setTodos)
  }, [token])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cerulean',
      headerRight: () => <SettingsButton navigation={navigation} />,
      headerLeft: () => <Fragment />,
    })
  }, [navigation])

  // Item renderer.
  const renderItem = ({ item }) => {
    // TODO: Do the rest.
    return (
      <TodoItem />
    )
  }

  return (
    <>
      <Text style={styles.fontColor}>Hello, world</Text>
    </>
  )
}

export default HomeScreen
