import React, { Dispatch, SetStateAction } from "react";

export interface Colortypes {
  Background: Array<string>;
  Text: string;
  Breathe: string;
  Breathetext: String;
  Buttoncolor: String;
}
interface Context {
  duration: number;
  Lightmode: Boolean;
  colors: Colortypes;
  sessions: number;
  setDuration: Dispatch<SetStateAction<number>>;
  setLightMode: Dispatch<SetStateAction<Boolean>>;
  setColors: Dispatch<SetStateAction<Object>>;
  setSessions: Dispatch<SetStateAction<number>>;
}
export const Context = React.createContext<Context>();
