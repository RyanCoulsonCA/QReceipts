import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

// Screens
import HomeScreen from "./screens/Home.js";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "#CCCCCC",
    overlayColor: "rgba(255,255,255,0)",
    contentOptions: {
      activeTintColor: "#fff",
      style: {
        zIndex: 0
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
