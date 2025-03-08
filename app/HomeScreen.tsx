import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../utils/types"; // ✅ Correct import path

// Define navigation type
type NavigationProps = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Ionicons name="camera-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>TrickShot</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.videoContainer}>
        <Text style={styles.videoPlaceholder}>[ Hypes of the Day Video ]</Text>
      </View>

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
};

export default HomeScreen; // ✅ Ensure this is a default export

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#111",
  },
  navTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e63946",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
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
    backgroundColor: "#111",
  },
  bottomNavText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
