import { StyleSheet, Text, View } from "react-native";
const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <Text>Ocupa espaco</Text>
    </View>
  );
};
export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: "red",
  },
  box2: {
    flex: 2,
    backgroundColor: "darkorange",
  },
  box3: {
    flex: 3,
    backgroundColor: "green",
  },
});
