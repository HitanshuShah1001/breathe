import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "./src/Utils/Screens";
import Settings from "./src/Screens/Settings/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Breathe,
  BreatheActive,
  More,
  MoreActive,
  SettingIcon,
} from "./src/Resources/Images";
import Icon from "./src/Components/Icon/Icon";

type HomeStackParams = {
  Home: undefined;
  Startbreathing: {
    mood: String;
  };
  Breathing: {
    mood: String;
  };
};

type SettingsStackParams = {
  Settings: undefined;
};

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      {Screens.map((screen, index) => (
        <HomeStack.Screen
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
          key={index}
        />
      ))}
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsStack"
        component={Settings}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "Secular",
            color: "black",
            fontSize: 12,
          },
          tabBarActiveTintColor: "blue",
        }}
      >
        <Tab.Screen
          name="Breathe"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color, focused }) =>
              focused ? <Icon uri={BreatheActive} /> : <Icon uri={Breathe} />,
          }}
        />
        <Tab.Screen
          name="More"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ color, focused }) =>
              focused ? <Icon uri={MoreActive} /> : <Icon uri={More} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
