import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import { BarCodeScanner } from "expo-barcode-scanner";

class BarcodeScannerExample extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}

class Header extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Icon
          onPress={this.props.openDrawer}
          style={styles.headerIcon}
          name="bars"
        />
        <Text style={styles.headerLogo}>QReceipt</Text>
        <Icon style={styles.headerIcon} name="camera" />
      </View>
    );
  }
}

class ScanScreen extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        topContent={
          <Text style={styles.centerText}>
            Go to{" "}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header
          openDrawer={this.props.navigation.openDrawer}
          style={styles.header}
        />
        <View style={styles.container}>
          <BarcodeScannerExample />
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  leftButtonText: "Menu",
  title: "Home"
};

// Stylesheet

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

export default HomeScreen;
