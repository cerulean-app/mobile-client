import React from 'react'
import { View } from 'react-native'
import useStyles from '../hooks/useStyles'

const TodoItem = ({ onItemPress, item }) => {
  const [styles] = useStyles()

  const handleSelfPress = () => {
    
  }

  return (
    <View style={styles.todoItem}>

    </View>
  )
}

export default TodoItem
