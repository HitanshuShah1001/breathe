import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Music } from "../../Resources/Music";
import { Context } from "../../Statemanagement/Context";
export default function MusicDropdown() {
  const { sound, setSound } = React.useContext(Context);
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShow(!show)}
        >
          <Text style={{ color: "white" }}>{sound}</Text>
        </TouchableOpacity>

        {show && (
          <ScrollView>
            {Music.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.duration}
                  onPress={() => {
                    setSound(item.mood);
                    setShow(!show);
                  }}
                  key={index}
                >
                  <Text style={{ color: "white" }}>{item.mood}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
