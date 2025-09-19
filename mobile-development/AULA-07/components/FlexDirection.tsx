import { StyleSheet, Text, View } from "react-native";
const FlexDirection = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
      <View style={[styles.container, styles.column]}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
      <View style={[styles.container, styles.rowReverse]}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
      <View style={[styles.container, styles.columnReverse]}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
      </View>
    </View>
  );
};
export default FlexDirection;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 60,
    backgroundColor: "#fff",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  column: {
    flexDirection: "column",
  },
  columnReverse: {
    flexDirection: "column-reverse",
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
