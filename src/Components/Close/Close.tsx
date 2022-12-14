import { useNavigation } from "@react-navigation/native";
import { Image, Pressable } from "react-native";

export default function Close(){
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.goBack()} style={{width:30,height:30,right:20,marginTop:10}}>
        <Image source={require('../../../assets/error.png')} style={{width:30,height:30}} />
        </Pressable>
    )
}