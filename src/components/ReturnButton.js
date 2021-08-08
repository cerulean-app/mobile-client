import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import useStyles from '../hooks/useStyles'

const ReturnButton = ({ navigation }) => {
  const [styles] = useStyles()

  const handleReturn = () => navigation.navigate('Home')

  return (
    <TouchableHighlight onPress={handleReturn}
      style={styles.returnButton}
      activeOpacity={1}
      underlayColor='rgba(0,0,0,0)'
    >
      <View>
        <Icon name='arrow-back-outline' color='#fff' size={28} />
      </View>
    </TouchableHighlight>
  )
}

export default ReturnButton
