import { AVPlaybackSource } from "expo-av";

interface Music {
  mood: string;
  audio: AVPlaybackSource;
}

export const Music: Array<Music> = [
  {
    mood: "Relaxing",
    audio: require("../../Sounds/Soft.mp3"),
  },
  {
    mood: "Soft",
    audio: require("../../Sounds/Relax.mp3"),
  },
  {
    mood: "Light Rain",
    audio: require("../../Sounds/Rain.mp3"),
  },
  {
    mood: "Deep",
    audio: require("../../Sounds/Tired.mp3"),
  },
];
