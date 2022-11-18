import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import lockCloseImage from "./assets/lock-close.png";
import lockOpenImage from "./assets/lock-open.png";

import { ref, update } from "firebase/database";
//import StartFirebase, { FirebaseContext } from './firebase';
import { db } from "./firebase/database.js";

export default function App() {
  const [doneState, setDone] = useState(false);

  const displays = {
    image: lockCloseImage,
    lockStatus: "Portón Cerrado\n(Presione para abir)",
  };
  pressedButton = () => {
    setDone(!doneState);
    update(ref(db, "/Proyecto"), {
      Puerta_Abierta: doneState,
    });
  };

  if (doneState) {
    displays.image = lockOpenImage;
    displays.lockStatus = "Portón Abierto\n(Presione para cerrar)";
  } else {
    displays.image = lockCloseImage;
    displays.lockStatus = "Portón Cerrado\n(Presione para abir)";
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{displays.lockStatus}</Text>
      <Pressable onPress={() => pressedButton()} style={styles.button}>
        <Image source={displays.image} style={styles.image} />
      </Pressable>
    </View>
  );
}

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
