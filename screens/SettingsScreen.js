import { View, Text, Button } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Button onPress={() => Auth.signOut()} title="Sign Out" />
    </View>
  );
};

export default SettingsScreen;
