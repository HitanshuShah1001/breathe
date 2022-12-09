import React from 'react'
import { View,Text } from 'react-native'
import {styles} from './styles'

interface Props {
    text?:String,
    color?:String
}
export default function Exercisetitle({text="Mindful breathing"}:Props) {
    let splittext = text.split(" ")
  return (
    <View>
    {
        splittext?.map((text,index) => (
            <Text style={styles.text} key={index}>{text}</Text>
        ))
    }
    </View>
  )
  
}
