import React, { useLayoutEffect, useState } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import useStyles from '../hooks/useStyles'
import ReturnButton from '../components/ReturnButton'
import DatePicker from 'react-native-date-picker'
import Modal from 'react-native-modal'
import Icon, { Button } from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import backendUri from '../config.json'
import useAuth from '../hooks/useAuth'
import { Picker } from '@react-native-picker/picker'

const CreateNewScreen = ({ navigation, route }) => {
  const [styles] = useStyles()
  const token = useAuth()
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(new Date()) // Date in the date picker.
  const [selectedDate, setSelectedDate] = useState(null) // If a date is added, use this.
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [repeating, setRepeating] = useState('')
  const [error, setError] = useState(null)

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

  const submit = async () => {
    try {
      const body = {
        name,
        description,
        repeating,
        dueDate: selectedDate,
      }
      const res = await fetch(backendUri + 'todo', { headers: { Authorization: token }, method: 'POST', body })
      if (!res.ok) return setError('Could not create To-do. Error ' + res.status)

      const todoItem = await res.json()
      route.params.onGoBack(todoItem)
      navigation.goBack()
    } catch (e) {
      console.error(e)
      setError('Please check your internet connection.')
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Button name='calendar-outline'
          size={24}
          color={styles.scheme() === 'dark' ? '#fff' : '#333'}
          backgroundColor='rgba(0,0,0,0)'
          onPress={() => setVisible(!visible)}
        >
          {selectedDate ? moment(selectedDate).calendar() : 'Add date/time'}
        </Button>
        {selectedDate && <TouchableOpacity style={styles.removeDate} onPress={() => setSelectedDate(null)}>
          <Icon name='close-outline' color={styles.scheme() === 'dark' ? '#fff' : '#333'} size={30} />
        </TouchableOpacity>}
        <View style={styles.createField}>
          <Icon name='text-outline'
            style={styles.createFieldIcon}
            size={24}
            color={styles.scheme() === 'dark' ? '#fff' : '#333'}
          />
          <TextInput
            style={styles.createFieldInput}
            value={name}
            onChangeText={setName}
            placeholderTextColor={styles.scheme() === 'dark' ? '#bbb' : 'gray'}
            placeholder='Task title'
          />
        </View>
        <View style={{ ...styles.createField, marginTop: 0 }}>
          <Icon name='document-text-outline'
            style={styles.createFieldIcon}
            size={24}
            color={styles.scheme() === 'dark' ? '#fff' : '#333'}
          />
          <TextInput
            style={styles.createFieldInput}
            value={description}
            onChangeText={setDescription}
            placeholderTextColor={styles.scheme() === 'dark' ? '#bbb' : 'gray'}
            placeholder='Add details (optional)'
          />
        </View>
        <View style={styles.horizontalLine} />
        <View style={{ ...styles.createField, marginTop: 0 }}>
          <Icon name='repeat-outline'
            style={styles.createFieldIcon}
            size={24}
            color={styles.scheme() === 'dark' ? '#fff' : '#333'}
          />
          <Text style={styles.createFieldText}>Repeating</Text>
        </View>
        <Picker
          selectedValue={repeating}
          onValueChange={setRepeating}
          style={{ color: '#fff', fontSize: 14, marginTop: -15 }}
          dropdownIconColor={styles.scheme() === 'dark' ? '#fff' : '#333'}
        >
          <Picker.Item style={styles.pickerItem} label='Only once' value='' />
          <Picker.Item style={styles.pickerItem} label='Daily' value='daily' />
          <Picker.Item style={styles.pickerItem} label='Weekly' value='weekly' />
          <Picker.Item style={styles.pickerItem} label='Monthly' value='monthly' />
          <Picker.Item style={styles.pickerItem} label='Yearly' value='yearly' />
        </Picker>
        <View style={styles.btnWrapper}>
          <Button name='checkmark-circle-outline'
            style={styles.loginBtn}
            onPress={submit}
            size={20}
            backgroundColor='#4BB543'
            iconStyle={{ marginRight: 5 }}
          >
            <Text style={styles.btnText}>Finish</Text>
          </Button>
        </View>
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
