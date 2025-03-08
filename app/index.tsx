import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icons for profile and camera
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// ✅ Define the valid navigation screens (Fixes 'never' error)
type RootStackParamList = {
  Home: undefined;
  Camera: undefined;
  Profile: undefined;
  Flicks: undefined;
  Flix: undefined;
  Hotspots: undefined;
  Sports: undefined;
};

// ✅ Correctly type `useNavigation`
type NavigationProps = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProps>(); // ✅ Fixes TypeScript errors

  return (
    <View style={styles.container}>
      {/* 🔹 Top Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Ionicons name="camera-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>BeatMyTrick</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* 🔹 Main Video Placeholder */}
      <View style={styles.videoContainer}>
        <Text style={styles.videoPlaceholder}>[ Hypes of the Day Video ]</Text>
      </View>

      {/* 🔹 Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Flicks")}>
          <Text style={styles.bottomNavText}>Flicks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Flix")}>
          <Text style={styles.bottomNavText}>Flix</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Hotspots")}>
          <Text style={styles.bottomNavText}>Hotspots</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Sports")}>
          <Text style={styles.bottomNavText}>Sports</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark mode background
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#111", // Black background
  },
  navTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e63946", // RED accent
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222", // Dark gray for video area
    margin: 10,
    borderRadius: 10,
  },
  videoPlaceholder: {
    fontSize: 18,
    color: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#111", // Matches the top navbar
  },
  bottomNavText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // White text ✅
  },
});
