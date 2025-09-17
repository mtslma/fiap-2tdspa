import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.description}>PLAYING FROM PLAYLIST:</Text>
        <Text style={styles.playlistName}>Lofi Loft</Text>
      </View>
      <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1E1E1E",
  },
  description: {
    color: "white",
  },
  playlistName: {
    color: "lightblue",
  },
});
