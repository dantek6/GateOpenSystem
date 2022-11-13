import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import lockCloseImage from "./assets/lock-close.png";
import lockOpenImage from "./assets/lock-open.png";

export default class App extends Component {
  state = {
    lockStatus: "Portón Cerrado\n(Presione para abir)",
    image: lockCloseImage,
  };
  pressedButton = () => {
    if (this.state.lockStatus === "Portón Cerrado\n(Presione para abir)") {
      this.setState({
        lockStatus: "Portón Abierto\n(Presione para cerrar)",
        image: lockOpenImage,
      });
    } else {
      this.setState({
        lockStatus: "Portón Cerrado\n(Presione para abir)",
        image: lockCloseImage,
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.lockStatus}</Text>
        <Pressable onPress={() => this.pressedButton()} style={styles.button}>
          <Image source={this.state.image} style={styles.image} />
        </Pressable>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 28, color: "#fff" },
  image: { width: 200, height: 200 },
  button: {
    marginTop: 10,
  },
});
