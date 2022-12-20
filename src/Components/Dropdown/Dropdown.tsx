import React, { useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import { Labels } from '../../Utils/Durationvalues'
import { Context } from '../../Statemanagement/Context'
export default function Dropdown() {
  const { duration, setDuration } = React.useContext(Context)
  const [show, setShow] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShow(!show)}
        >
          <Text style={{ color: 'white' }}>{duration / 60} mins</Text>
        </TouchableOpacity>

        {show && (
          <ScrollView>
            {Labels.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.duration}
                  onPress={() => {
                    setDuration(item.value * 60)
                    setShow(!show)
                  }}
                  key={index}
                >
                  <Text style={{ color: 'white' }}>{item.label}</Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        )}
      </View>
    </View>
  )
}
