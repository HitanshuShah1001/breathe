import React from "react";

interface Context {
  duration: Number;
  setDuration: any;
}
export const Context = React.createContext<Context>();
