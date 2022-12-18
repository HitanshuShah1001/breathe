import Breathing from "../Screens/Breathing/Breathing";
import Home from "../Screens/Home/Home";
import Startbreathing from "../Screens/Startbreathing/Startbreathing";

interface ScreenOptions {
  name: string;
  component: Function;
}
export const Screens: Array<ScreenOptions> = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Breathing",
    component: Breathing,
  },
  {
    name: "Startbreathing",
    component: Startbreathing,
  },
];
