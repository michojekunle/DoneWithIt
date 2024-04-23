import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView,TouchableOpacity, TouchableNativeFeedback, Alert, TouchableHighlight, TouchableWithoutFeedback, StyleSheet, Text, View, Button, Platform } from 'react-native';

export default function App() {
  console.log(require('./assets/icon.png'))
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button color="orange" title='Click Me' 
        onPress={() => Alert.prompt("My title", "my message", text => console.log(text))}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'green' }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.curentHeight : 0
  },
});
