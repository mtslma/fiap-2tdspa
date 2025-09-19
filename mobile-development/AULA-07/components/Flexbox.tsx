import { StyleSheet, Text, View } from "react-native";
import Flex from "./Flex";
import FlexDirection from "./FlexDirection";
import LayoutDirection from "./LayoutDirection";
import { useState } from "react";
import JustifyContent from "./JustifyContent";
import AlignItems from "./AlignItems";
import AlignSelf from "./AlignSelf";
import FlexWrap from "./FlexWrap";

const Flexbox = () => {
  const [concept, _] = useState("flexwrap");

  return (
    <View style={styles.container}>
      {concept === "base" && (
        <>
          <Text style={styles.text}>
            Open up App.tsx to start working on your app!
          </Text>
          <Text style={[styles.text, styles.text2]}>FlexDirection</Text>
          <Text style={[styles.text, styles.text3]}>Row</Text>
        </>
      )}
      {concept === "flex" && <Flex />}
      {concept === "flexdirection" && <FlexDirection />}
      {concept === "layoutdirection" && <LayoutDirection />}
      {concept === "justifycontent" && <JustifyContent />}
      {concept === "alignitems" && <AlignItems />}
      {concept === "alignself" && <AlignSelf />}
      {concept === "flexwrap" && <FlexWrap />}
      <View style={styles.abs}>
        <Text>1</Text>
      </View>
    </View>
  );
};
export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d0d0",
    padding: 16,
    paddingTop: 60,
  },
  text: {
    fontSize: 24,
    fontWeight: "medium",
    padding: 4,
    backgroundColor: "#02f",
  },
  text2: {
    backgroundColor: "#0f2",
  },
  text3: {
    backgroundColor: "#f20",
  },
  abs: {
    position: "absolute",
    top: 60,
    right: 30,
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
});
