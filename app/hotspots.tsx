import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HotspotsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotspots Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e63946",
  },
});
