import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screens } from './src/Utils/Screens'
import Settings from './src/Screens/Settings/Settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const SettingsStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      {Screens.map((screen) => (
        <HomeStack.Screen name={screen.name} component={screen.component} options={{headerShown:false}}/>
      ))}
    </HomeStack.Navigator>
  )
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsStack" component={Settings}  options={{headerShown:false}} />
    </SettingsStack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Breathe" component={HomeStackScreen}/>
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
