import {Image, ImageSourcePropType} from 'react-native';

interface Props{
    uri:ImageSourcePropType
}

export default function Icon({uri}:Props) {
    return (
        <Image source={uri}  style={{width:24,height:24}}/>
    )
}