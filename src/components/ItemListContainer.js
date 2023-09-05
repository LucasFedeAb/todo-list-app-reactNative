import { StyleSheet, View, FlatList } from "react-native";
import React from "react";

const ItemListContainer = ({ itemsList, renderListItem }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={itemsList}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ItemListContainer;

const styles = StyleSheet.create({
  listContainer: {
    widht: "100%",
    marginTop: 20,
  },
});
