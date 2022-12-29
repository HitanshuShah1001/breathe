import React, { Dispatch, SetStateAction } from "react";

export interface Colortypes {
  Background: Array<string>;
  Text: string;
  Breathe: string;
  Breathetext: String;
  Buttoncolor: String;
  Playcolor: string;
}
interface Context {
  duration: number;
  Lightmode: Boolean;
  colors: Colortypes;
  sessions: number;
  sound: String;
  paused: Boolean;
  setDuration: Dispatch<SetStateAction<number>>;
  setLightMode: Dispatch<SetStateAction<Boolean>>;
  setColors: Dispatch<SetStateAction<Object>>;
  setSessions: Dispatch<SetStateAction<number>>;
  setSound: Dispatch<SetStateAction<String>>;
  setPaused: Dispatch<SetStateAction<Boolean>>;
}
export const Context = React.createContext<Context>();
