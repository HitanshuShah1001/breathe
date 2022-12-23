import { AVPlaybackSource } from "expo-av";

interface Music {
  mood: string;
  audio: AVPlaybackSource;
}

export const Music: Array<Music> = [
  {
    mood: "Angry",
    audio: require("../../Sounds/Insomnia.mp3"),
  },
  {
    mood: "Sleepless",
    audio: require("../../Sounds/Insomnia.mp3"),
  },
  {
    mood: "Cluttered",
    audio: require("../../Sounds/Declutter.mp3"),
  },
  {
    mood: "Stressed",
    audio: require("../../Sounds/Stress.mp3"),
  },
  {
    mood: "Tired",
    audio: require("../../Sounds/Tired.mp3"),
  },
  {
    mood: "Excited",
    audio: require("../../Sounds/Insomnia.mp3"),
  },
];
