import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Breathing from './src/Screens/Breathing/Breathing';
import Startbreathing from './src/Screens/Startbreathing/Startbreathing';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartBreathing'>
        <Stack.Screen name="Breathing" component={Breathing} options={{headerShown:false}}/>
        <Stack.Screen name="StartBreathing" component={Startbreathing} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
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
