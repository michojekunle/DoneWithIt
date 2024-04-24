import { StatusBar } from "expo-status-bar";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  Dimensions,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <WelcomeScreen/>
  );
}

const containerStyle = { backgroundColor: "green" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.curentHeight : 0,
  },
});
