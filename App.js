import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import NoteContainer from "./src/components/NoteContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NoteContainer />
      <StatusBar style="light" backgroundColor="#1b3358" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b3358",
  },
});
