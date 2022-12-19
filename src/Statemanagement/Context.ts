import React, { Dispatch, SetStateAction } from "react";

interface Context {
  duration: Number;
  Lightmode: Boolean;
  colors: Object;
  setDuration: Dispatch<SetStateAction<number>>;
  setLightMode: Dispatch<SetStateAction<Boolean>>;
  setColors: Dispatch<SetStateAction<Object>>;
}
export const Context = React.createContext<Context>();
