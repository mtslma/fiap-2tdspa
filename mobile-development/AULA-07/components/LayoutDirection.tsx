import { StyleSheet, Text, View } from "react-native";
const LayoutDirection = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
      <View style={[styles.container, styles.rtl]}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
    </View>
  );
};
export default LayoutDirection;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 60,
    backgroundColor: "#fff",
  },
  rtl: {
    direction: "rtl",
  },
  box1: {
    backgroundColor: "#02f",
  },
  box2: {
    backgroundColor: "skyblue",
  },
  box3: {
    backgroundColor: "steelblue",
  },
  box: {
    width: 50,
    height: 50,
  },
});
