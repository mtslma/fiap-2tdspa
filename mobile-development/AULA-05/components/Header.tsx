import { Image, StyleSheet, View } from "react-native";
const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")}></Image>
        </View>
    );
};
export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 20,
    },
});
