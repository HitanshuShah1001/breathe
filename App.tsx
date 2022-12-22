import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Context } from "./src/Statemanagement/Context";
import { useFonts } from "expo-font";
import Navigation from "./Navigation";
import { Light } from "./src/Utils/Constants/Colors";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import {
  Breathe,
  CancelLight,
  Canceldark,
  SettingIcon,
  Sources,
} from "./src/Resources/Images";

export default function App() {
  let [fontsLoaded] = useFonts({
    Secular: require("./assets/fonts/SecularOne-Regular.ttf"),
  });
  const [isLoaded, setisLoaded] = useState<Boolean>(false);

  const [Lightmode, setLightMode] = useState<Boolean>(true);
  const [duration, setDuration] = useState<number>(120);
  const [colors, setColors] = useState<Object>(Light);
  const values = {
    duration,
    setDuration,
    colors,
    setColors,
    Lightmode,
    setLightMode,
  };

  let cacheResources = async () => {
    const images: Array<any> = [
      ...Sources,
      Breathe,
      SettingIcon,
      CancelLight,
      Canceldark,
    ];
    const cacheImages = images.map((image) => {
      Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  // useEffect(() => {
  //   const loadResources = async () => {
  //     await cacheResources();
  //     setisLoaded(true);
  //   };
  //   loadResources();
  // }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <Context.Provider value={values}>
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </Context.Provider>
    );
  }
}
