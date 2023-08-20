import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";

import messages from "../assets/data/messages.json";
import Message from "../components/Message";

const ChatScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/BG.png")}
      style={styles.bg}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />
      <Text>ChatScreen</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  list: {
    padding: 10,
  },
});

export default ChatScreen;
