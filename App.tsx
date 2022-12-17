import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Context } from './src/Statemanagement/Context';
import { useFonts } from 'expo-font';
import Navigation from './Navigation';
import { Light,Dark } from './src/Utils/Constants/Colors';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Secular':require('./assets/fonts/SecularOne-Regular.ttf') 
  })

  const [duration,setDuration] = useState<number>(120);
  const [colors,setColors] = useState<Object>(Light);
  const values = {duration,setDuration,colors,setColors}
  if(!fontsLoaded){
    return <ActivityIndicator />
  }
  return (
  
    <Context.Provider value={values}>
      <View style={{flex:1}}>
    <Navigation />
    </View>
    </Context.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
