import { useNavigation } from '@react-navigation/native';
import {View,Text,Image, Pressable} from 'react-native';
import { styles } from './styles';

interface Props {
    uri:any;
    uri2:any;
    label:String;
    label2:String;
}
export default function Card({uri,uri2,label,label2,action}:Props){
  const navigation = useNavigation();
    return (
        <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('Startbreathing')}
      >
        <View
          style={styles.subcontainer}
        >
          <Image
            source={uri}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.text}>{label}</Text>
        </View>
        <View
          style={styles.subcontainer}
        >
          <Image
            source={uri2}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.text}>{label2}</Text>
        </View>
      </Pressable>
    )
}