import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.body}>
        <Text style={styles.h1}>Monday, 25 Dec 2023</Text>
        <Text style={styles.h2}>Hi Peter, Merry Christmas!</Text>

        <View style={styles.quoteContainer}>
          <Quote
            text={
              "The best way to spread Christmas cheer is singing loud for all to hear."
            }
          ></Quote>
          <Quote
            text={
              "Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever."
            }
          ></Quote>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  body: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  quoteContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginVertical: 16,
  },
  h1: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  h2: {
    marginTop: 10,
    fontSize: 12,
  },
});
