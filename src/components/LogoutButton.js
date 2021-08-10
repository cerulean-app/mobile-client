import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { TouchableHighlight, View, Text } from 'react-native'
import Icon, { Button } from 'react-native-vector-icons/Ionicons'
import useStyles from '../hooks/useStyles'
import { backendUri } from '../config.json'
import useLocalStorage from '../hooks/useLocalStorage'

const LogoutButton = ({ navigation }) => {
  const [token, setToken] = useLocalStorage('token')
  const [visible, setVisible] = useState(false)
  const [styles] = useStyles()

  const handleLogout = () => {
    setVisible(true)
    console.log(token)
  }

  const handleLogoutSubmit = () => {
    setVisible(false)
    // Logout via backend.
    fetch(backendUri + 'logout', { method: 'POST', headers: { Authorization: token } })
        .then(() => {
          setToken(null)
          navigation.navigate('Login')
        }).catch(console.error)
  }

  return (
    <>
      <TouchableHighlight onPress={handleLogout}
        style={styles.returnButton}
        activeOpacity={1}
        underlayColor='rgba(0,0,0,0)'
      >
        <View>
          <Icon name='log-out-outline' color={styles.scheme() === 'dark' ? '#fff' : '#000'} size={28} />
        </View>
      </TouchableHighlight>
      <Modal isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Are you sure that you want to log out?</Text>
          <View style={styles.btnWrapperModal}>
            <Button name='log-out-outline'
              style={styles.modalLogout}
              onPress={handleLogoutSubmit}
            >
              <Text style={styles.modalBtnText}>Logout</Text>
            </Button>
            <View style={{ width: 10 }} />
            <Button name='close-circle-outline'
              style={styles.modalCancel}
              onPress={() => setVisible(!visible)}
            >
              <Text style={styles.modalBtnText}>Cancel</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default LogoutButton
