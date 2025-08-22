import { Image, Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/header/filter-icon.png")}></Image>
      <Image source={require("../assets/header/logo.png")}></Image>
      <Image source={require("../assets/header/user-icon.png")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
