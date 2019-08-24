import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Header extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Icon style={styles.headerIcon} name="bars" />
        <Text style={styles.headerLogo}>QReceipt</Text>
        <Icon style={styles.headerIcon} name="camera" />
      </View>
    );
  }
}

export default function App() {
  return (
    <View>
      <Header style={styles.header} />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  header: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    zIndex: 1,

    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  headerLogo: {
    flex: 80,
    textAlign: "center",
    color: "#AAAAAA",
    letterSpacing: 1
  },
  headerIcon: {
    flex: 10,
    textAlign: "center",
    fontSize: 16,
    color: "#AAAAAA"
  }
});
