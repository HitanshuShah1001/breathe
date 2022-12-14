import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Breathing from './src/Screens/Breathing/Breathing';
import Startbreathing from './src/Screens/Startbreathing/Startbreathing';
import { Context } from './src/Statemanagement/Context';
import Home from './src/Screens/Home/Home';
const Stack = createNativeStackNavigator();
export default function App() {
  const [duration,setDuration] = useState<number>(120);
  const values = {duration,setDuration}
  return (
    // 
    <Context.Provider value={values}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Breathing" component={Breathing} options={{headerShown:false}}/>
        <Stack.Screen name="StartBreathing" component={Startbreathing} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
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
