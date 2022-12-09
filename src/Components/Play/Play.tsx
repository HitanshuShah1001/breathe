import React from "react";
import { Image } from "react-native";

interface Props {
    onClick:Function
}

export default function Play({onClick}:Props){
    return (
        <Image source={require('../../../assets/play.png')} style={{height:100,width:100,marginTop:40}} />
    )
}