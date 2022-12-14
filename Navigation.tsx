import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "./src/Utils/Screens";

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            {Screens.map((screen,index) => (
                        <Stack.Screen name={screen.name} component={screen.component} options={{headerShown:false}} key={index}/>
            ))}
            </Stack.Navigator>
            </NavigationContainer>
    )
}