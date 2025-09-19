import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import "../global.css"
import { Link } from "expo-router";
import Tweet from "./tweet";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Tweet />

    
      <Link href={"/tweets"}>tweets</Link>
      <Link href={"/profile"}>perfil</Link>
      <Link href={"/tweet"}>Ir para o negócio</Link>
      


      <StatusBar style="auto" />
    </View>
  );
}
