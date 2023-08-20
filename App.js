import { StyleSheet, Text, View } from "react-native";
import ChatsScreen from "./screens/ChatsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
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
