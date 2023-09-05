import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Input = ({ handleAddItem, onHandleChangeItem, textValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Agregar nota"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <TouchableOpacity
          onPress={handleAddItem}
          style={styles.buttonAddContainer}
        >
          <FontAwesome name="plus-circle" size={35} color="#0c7075" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#FFF",
    width: 280,
    height: 50,
    fontSize: 14,
    paddingLeft: 12,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  buttonAddContainer: {
    marginRight: 6,
  },
  textButton: {
    color: "#FFF",
    fontSize: 25,
  },
  inputContainer: {
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
