import { View, Image, Text } from 'react-native'
import { Sources } from '../../Resources/Images'

export default function Home() {
  return (
   <View style={{flex:1,justifyContent:'space-around'}}>
    <View style={{flex:0.6}}>

    </View>
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-around'}}>
        <Image source={Sources[0]} style={{height:'60%',width:'40%',borderRadius:20}} resizeMode="cover"/>
        <Image source={Sources[1]} style={{height:'60%',width:'40%',borderRadius:20}} />
    </View>
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-around'}}>
        <Image source={Sources[2]} style={{height:'60%',width:'40%',borderRadius:20}} />
        <Image source={Sources[3]} style={{height:'60%',width:'40%',borderRadius:20}} />
    </View>
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-around'}}>
        <Image source={Sources[4]} style={{height:'60%',width:'40%',borderRadius:20}} />
        <Image source={Sources[5]} style={{height:'60%',width:'40%',borderRadius:20}} />
    </View>
    
    
   </View>
  )
}
