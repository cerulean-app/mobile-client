import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import useStyles from '../hooks/useStyles'

const SettingsButton = ({ navigation }) => {
  const [styles] = useStyles()

  const handleSettings = () => navigation.navigate('Settings')

  return (
    <TouchableHighlight onPress={handleSettings}
      style={styles.returnButton}
      activeOpacity={1}
      underlayColor='rgba(0,0,0,0)'
    >
      <View>
        <Icon name='settings-outline' color={styles.scheme() === 'dark' ? '#fff' : '#000'} size={28} />
      </View>
    </TouchableHighlight>
  )
}

export default SettingsButton
