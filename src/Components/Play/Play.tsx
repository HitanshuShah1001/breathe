import React, { useContext } from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Image, Pressable } from "react-native";
import { Context } from "../../Statemanagement/Context";

interface Props {
  onClick?: any;
  props: SvgProps;
}

export default function Play({ onClick, props }: Props) {
  const { colors } = useContext(Context);
  return (
    <Pressable onPress={onClick}>
      <Svg
        width={100}
        height={100}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={100}
          height={100}
          {...props}
        >
          <Path
            fill={colors.Playcolor}
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm-6 24V8l16.008 8L10 24z"
            className="color4e4e50 svgShape"
          />
        </Svg>
      </Svg>
    </Pressable>
  );
}
