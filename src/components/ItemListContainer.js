import { StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";

const ItemListContainer = ({ itemsList, renderListItem }) => {
  return (
    <View style={styles.listContainer}>
      {itemsList.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No existen notas</Text>
        </View>
      ) : (
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default ItemListContainer;

const styles = StyleSheet.create({
  listContainer: {
    widht: "100%",
    marginTop: 20,
  },
  textContainer: {
    widht: "100%",
    height: 300,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: "#ccc",
  },
});
