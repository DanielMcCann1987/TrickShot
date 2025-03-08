import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Dark mode background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e63946", // Red color for title
  },
});
