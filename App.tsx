import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./utils/types"; // ✅ Corrected Import Path

// ✅ Ensure Correct Case-Sensitivity for File Imports
import HomeScreen from "./app/HomeScreen"; 
import ProfileScreen from "./app/Profile"; 
import CameraScreen from "./app/Camera"; 
import FlicksScreen from "./app/Flicks"; 
import FlixScreen from "./app/Flix"; 
import HotspotsScreen from "./app/Hotspots"; 
import SportsScreen from "./app/Sports"; 

// ✅ Create Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Flicks" component={FlicksScreen} />
        <Stack.Screen name="Flix" component={FlixScreen} />
        <Stack.Screen name="Hotspots" component={HotspotsScreen} />
        <Stack.Screen name="Sports" component={SportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
