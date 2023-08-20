import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/ChatScreen";
import ContactsScreen from "../screens/ContactsScreen";
import MainTabNavigator from "../navigation/MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "whitesmoke" } }}
      >
        <Stack.Screen
          component={MainTabNavigator}
          name="Home"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={ChatScreen} name="Chat" />
        <Stack.Screen component={ContactsScreen} name="Contacts" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
