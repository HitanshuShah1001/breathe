import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Labels } from "../../Utils/Durationvalues";
import { Context } from "../../Statemanagement/Context";
import ButtonLabels from "../Buttonlabels/Buttonlabels";
import { Tick } from "../../Resources/Images";
import Icon from "../Icon/Icon";
import Selected from "../Tick/tick";
export default function Dropdown() {
  const { duration, setDuration, colors } = React.useContext(Context);
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShow(!show)}
        >
          <ButtonLabels text={`${duration / 60} mins`} />
        </TouchableOpacity>

        {show && (
          <ScrollView>
            {Labels.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.duration}
                  onPress={() => {
                    setDuration(item.value * 60);
                    setShow(!show);
                  }}
                  key={index}
                >
                  <ButtonLabels text={item.label} />
                  {item.value * 60 === duration && <Selected />}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
