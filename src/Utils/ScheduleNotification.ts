import * as Notifications from "expo-notifications";
import { quotes } from "../Resources/Quotes";
export const askNotificationPermission = async () => {
  const permission = await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowDisplayInCarPlay: true,
      allowAnnouncements: true,
    },
    android: {},
  });
  if (permission.status === "granted") {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Mindful Breaths",
        body: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
      },
      trigger: {
        hour: 10,
        minute: 30,
        repeats: true,
      },
    });
  }
};
