import { StyleSheet, Text, View } from "react-native";
const JustifyContent = () => {
  return (
    <>
      <View style={[styles.container, styles.row]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={[styles.container, styles.column]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </>
  );
};
export default JustifyContent;
const styles = StyleSheet.create({
  container: {
    // alinha no eixo principal
    justifyContent: "space-between",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "darkorange",
  },
  column: {
    flexDirection: "column",
    backgroundColor: "skyblue",
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "#033",
  },
});
