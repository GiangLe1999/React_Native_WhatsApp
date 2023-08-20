import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const InputBox = () => {
  const [message, setMessge] = useState("");
  const sendMsgHandler = () => {
    setMessge("");
  };

  return (
    // Dùng edges để bỏ padding mặc định của SafeAreaView
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      {/* Icon */}
      <TouchableOpacity>
        <AntDesign name="plus" size={24} color="royalblue" />
      </TouchableOpacity>

      {/* Text input  */}
      <TextInput
        placeholder="Type your message"
        style={styles.input}
        value={message}
        onChangeText={setMessge}
      />

      {/* Icon */}
      <TouchableOpacity onPress={sendMsgHandler}>
        <MaterialIcons
          style={styles.send}
          name="send"
          size={16}
          color="white"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },

  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default InputBox;
