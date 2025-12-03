import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-extralight text-primary">
        {" "}
        Welcome to My Movie App!
      </Text>
    </View>
  );
}
