import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";

import messages from "../assets/data/messages.json";
import Message from "../components/Message";
import InputBox from "../components/InputBox";

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
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
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
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
