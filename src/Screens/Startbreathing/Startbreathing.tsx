import React,{useState} from "react";
import {View} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Duration from "../../Components/Duration/Duration";
import Exercisecaption from "../../Components/Exercisecaption/Exercisecaption";
import Exercisetitle from "../../Components/Exercisetitle/Exercisetitle";
import Play from "../../Components/Play/Play";
import { styles } from "./styles";


export default function Startbreathing(){
    const navigation = useNavigation();
    return (
        <View style={styles.parent}>
            <View style={styles.container}>
            </View>
            <View style={styles.subcontainer}>
                <Exercisetitle />
                <Exercisecaption /> 
                <Play onClick={() => navigation.navigate('Breathing')}/> 
                <Duration/>         

            </View>
            <View style={{flex:2}}>

            </View>
        </View>
    )
}