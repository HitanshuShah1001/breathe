import { useContext, useState } from 'react'
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { Context } from '../../Statemanagement/Context'
import { Light,Dark } from '../../Utils/Constants/Colors'
export default function Settings() {
  const [enabled, setEnabled] = useState(false)
  const {Lightmode,setLightMode,colors,setColors} = useContext(Context);

  const toggleMode = () => {
    setLightMode(!Lightmode);
    setEnabled((enabled) => !enabled)
    setColors(Lightmode == false ? Light:Dark)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={styles.container}
      >
        <View
          style={styles.subcontainer}
        >
          <Text style={styles.text}>Dark Mode</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={enabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMode}
            value={enabled}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
