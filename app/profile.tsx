import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  // Dummy data for videos
  const videoThumbnails = [
    { id: "1", source: require("../assets/sample1.jpg") },
    { id: "2", source: require("../assets/sample2.jpg") },
    { id: "3", source: require("../assets/sample3.jpg") },
    { id: "4", source: require("../assets/sample4.jpg") },
    { id: "5", source: require("../assets/sample5.jpg") },
    { id: "6", source: require("../assets/sample6.jpg") },
  ];

  return (
    <View style={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.header}>
        <Image source={require("../assets/profile-pic.jpg")} style={styles.profilePic} />
        <Text style={styles.username}>@Username</Text>
      </View>

      {/* Video Grid Section */}
      <FlatList
        data={videoThumbnails}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.thumbnailContainer}>
            <Image source={item.source} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark mode background
    padding: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#e63946",
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  thumbnailContainer: {
    flex: 1,
    margin: 5,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

