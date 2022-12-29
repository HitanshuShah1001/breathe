import * as Notifications from "expo-notifications";

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
        title: "What are you dealing with currently?Let's make it simpler",
      },
      trigger: {
        hour: 10,
        minute: 30,
        repeats: true,
      },
    });
  }
};
