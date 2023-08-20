import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./components/ChatListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
