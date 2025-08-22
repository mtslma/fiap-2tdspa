import { Ionicons } from "@expo/vector-icons";
import { Image, View, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Ionicons name="settings" size={24} color="gray" />
      <Ionicons name="call" size={24} color="gray" />
      <Ionicons name="home" size={24} color="gray" />
      <Ionicons name="list" size={24} color="gray" />
      <Ionicons name="chatbox" size={24} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 32,
  },
});
