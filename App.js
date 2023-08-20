import { StyleSheet, Text, View } from "react-native";
import ChatsScreen from "./screens/ChatsScreen";
import ChatScreen from "./screens/ChatScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 50,
  },
});
