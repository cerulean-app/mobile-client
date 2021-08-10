import React, { useLayoutEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useStyles from '../hooks/useStyles'
import ReturnButton from '../components/ReturnButton'
import DatePicker from 'react-native-date-picker'
import Modal from 'react-native-modal'
import Icon, { Button } from 'react-native-vector-icons/Ionicons'
import moment from 'moment'

const CreateNewScreen = ({ navigation }) => {
  const [styles] = useStyles()
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(new Date()) // Date in the date picker.
  const [selectedDate, setSelectedDate] = useState(null) // If a date is added, use this.

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Creating new To-do',
      headerLeft: () => <ReturnButton navigation={navigation} />,
    })
  }, [navigation])

  const selectDate = () => {
    setVisible(!visible)
    setSelectedDate(date)
  }

  return (
    <>
      <View style={styles.container}>
        <Button name='calendar-outline'
          size={24}
          color={styles.scheme() === 'dark' ? '#fff' : '#333'}
          backgroundColor='rgba(0,0,0,0)'
          style={styles.calendarButton}
          onPress={() => setVisible(!visible)}
        >
          {selectedDate ? moment(selectedDate).calendar() : 'Add date/time'}
        </Button>
        {selectedDate && <TouchableOpacity style={styles.removeDate} onPress={() => setSelectedDate(null)}>
          <Icon name='close-outline' color={styles.scheme() === 'dark' ? '#fff' : '#333'} size={30} />
        </TouchableOpacity>}
      </View>
      <Modal isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
        <View style={styles.calendarModal}>
          <DatePicker
            date={date}
            onDateChange={setDate}
            minimumDate={new Date()}
            androidVariant='nativeAndroid'
          />
          <View style={styles.btnWrapperModal}>
            <Button name='add-circle-outline'
              style={styles.calendarAddBtn}
              onPress={selectDate}
            >
              <Text style={styles.modalBtnText}>Add date</Text>
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

export default CreateNewScreen
