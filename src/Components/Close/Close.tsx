import { useNavigation } from '@react-navigation/native'
import { Image, Pressable } from 'react-native'
import { Context } from '../../Statemanagement/Context'
import { useContext } from 'react'
import { CancelLight, Canceldark } from '../../Resources/Images'
import { styles } from './styles'

export default function Close() {
  const navigation = useNavigation()
  const { Lightmode } = useContext(Context)

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={styles.pressable}
    >
      <Image
        source={Lightmode ? CancelLight : Canceldark}
        style={styles.image}
      />
    </Pressable>
  )
}
