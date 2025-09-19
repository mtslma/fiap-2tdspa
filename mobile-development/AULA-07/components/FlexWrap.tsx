import { StyleSheet, Text, View } from "react-native";
const FlexWrap = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>1</Text>
      </View>
      <View style={styles.box}>
        <Text>2</Text>
      </View>
      <View style={styles.box}>
        <Text>3</Text>
      </View>
      <View style={styles.box}>
        <Text>4</Text>
      </View>
      <View style={styles.box}>
        <Text>5</Text>
      </View>
      <View style={styles.box}>
        <Text>6</Text>
      </View>
      <View style={styles.box}>
        <Text>7</Text>
      </View>
      <View style={styles.box}>
        <Text>8</Text>
      </View>
      <View style={styles.box}>
        <Text>9</Text>
      </View>
      <View style={styles.box}>
        <Text>10</Text>
      </View>
      <View style={styles.box}>
        <Text>11</Text>
      </View>
      <View style={styles.box}>
        <Text>12</Text>
      </View>
    </View>
  );
};
export default FlexWrap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    // gap: 24,
    rowGap: 8,
    columnGap: 16,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "mediumturquoise",
    borderColor: "#003",
    borderWidth: 1,
  },
});
