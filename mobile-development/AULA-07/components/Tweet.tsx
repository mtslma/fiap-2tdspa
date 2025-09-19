import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
const Tweet = () => {
  return (
    <View className="flex-row p-3 gap-3">
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/511244255294001152/v5phEU1O_x96.jpeg",
        }}
        className="h-20 w-20 rounded-full"
      />
      <View className="flex-1 gap-2">
        <View className="flex-row gap-1">
          <Text className="font-semibold">Yukihiro Matz</Text>
          <Text className="text-slate-600"> @yukihiro_matz · 23h</Text>
        </View>

        <Text>Sayonara Nippon</Text>

        <View>
          <Ionicons name="accessibility" />
        </View>
      </View>
    </View>
  );
};
export default Tweet;
