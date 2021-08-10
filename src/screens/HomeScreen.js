import React, { useLayoutEffect, Fragment, useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import useStyles from '../hooks/useStyles'
import SettingsButton from '../components/SettingsButton'
import useAuth from '../hooks/useAuth'
import { backendUri } from '../config.json'
import TodoItem from '../components/TodoItem'
import Loading from '../components/Loading'
import NoItems from '../components/NoItems'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = ({ navigation }) => {
  const token = useAuth()
  const [styles] = useStyles()
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    // Still loading.
    if (token === false) return
    else if (!token) return navigation.navigate('Login')

    // Avoid multiple requests.
    if (todos !== null) return

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

  // Callback called by the TodoItem that was pressed.
  const handleTodoDetails = (item) => {

  }

  const handleCreate = () => {
    navigation.navigate('CreateNew')
  }

  // Item renderer.
  const renderItem = ({ item }) => (
    <TodoItem onItemPress={handleTodoDetails} { ...item } />
  )

  return (
    <>
      <Text style={styles.mainTitle}>Your To-do list</Text>
      {todos === null ? <Loading /> :
          todos === [] ? <NoItems /> :
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
      />}
      <TouchableOpacity
        style={styles.actionButton}
        activeOpacity={0.7}
        onPress={handleCreate}
      >
        <Icon name='add-outline' size={30} color='#fff' />
      </TouchableOpacity>
    </>
  )
}

export default HomeScreen
