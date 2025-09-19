import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

import Tweet from "../components/Tweet";
import { Link, useRouter } from "expo-router";

export default function App() {

  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Tweet></Tweet>

      <TouchableOpacity onPress={() => router.back()} className="border-2 rounded-lg px-4">
          <Link href={"/index"}>Voltar nativo</Link>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
