import React from 'react'
import { Pressable, Text, View } from 'react-native'
import useStyles from '../hooks/useStyles'

const TodoItem = ({ onItemPress, item }) => {
  const [styles] = useStyles()

  const handleSelfPress = () => {
    console.log('Self press')
  }

  return (
    <Pressable style={styles.todoItem} onPress={handleSelfPress}>
      <View style={styles.todoItemLeft}>

      </View>
      <View style={styles.todoItemRight}>
        <Text>{item.name}</Text>
        <Text>{item.description || ''}</Text>
      </View>
    </Pressable>
  )
}

export default TodoItem
