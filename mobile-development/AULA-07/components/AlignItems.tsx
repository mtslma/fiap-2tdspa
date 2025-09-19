import { StyleSheet, Text, View } from "react-native";
const AlignItems = () => {
  return (
    <>
      <View style={[styles.container, styles.row]}>
        <View style={[styles.box, styles.bigBox]} />
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
export default AlignItems;
const styles = StyleSheet.create({
  container: {
    // alinha no eixo cruzado
    alignItems: "center",
    flex: 1,
    padding: 4,
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
    borderColor: "#000",
    borderWidth: 1,
  },
  bigBox: {
    width: 100,
    height: 100,
  },
});
