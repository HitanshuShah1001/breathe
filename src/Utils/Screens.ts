import Breathing from "../Screens/Breathing/Breathing";
import Home from "../Screens/Home/Home";
import Startbreathing from "../Screens/Startbreathing/Startbreathing";

interface ScreenOptions {
  name: string;
  component: Function;
}
export const Screens: Array<ScreenOptions> = [
  {
    name: "Startbreathing",
    component: Startbreathing,
  },
  {
    name: "Breathing",
    component: Breathing,
  },
];
