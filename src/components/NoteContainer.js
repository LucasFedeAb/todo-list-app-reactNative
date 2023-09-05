import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Input from "./Input";
import ItemListContainer from "./ItemListContainer";
import Modal from "./Modal";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const NoteContainer = () => {
  const [textValue, setTextValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => setTextValue(text);

  const handleAddItem = () => {
    if (textValue === "") {
      return;
    }

    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue, checkComplete: false },
    ]);
    setTextValue("");
  };

  const renderListItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onHandleCheck(index)}>
        {item.checkComplete ? (
          <FontAwesome name="check-square-o" size={28} color="green" />
        ) : (
          <FontAwesome name="square-o" size={28} color="#CCC" />
        )}
      </TouchableOpacity>

      <ScrollView horizontal={true}>
        <Text
          style={item.checkComplete ? styles.textComplete : styles.textItem}
        >
          {(item?.value).toUpperCase()}
        </Text>
      </ScrollView>

      <TouchableOpacity onPress={() => onHandleModal(index)}>
        <FontAwesome name="trash-o" size={28} color="darkred" />
      </TouchableOpacity>
    </View>
  );

  const onHandleDelete = () => {
    let arr = itemsList;
    arr.splice(itemSelected, 1);
    setItemsList(arr);
    setModalVisible(false);
  };

  const onHandleCheck = (index) => {
    setItemsList((prevState) => {
      const updatedItems = [...prevState];
      updatedItems[index].checkComplete = !updatedItems[index].checkComplete;
      return updatedItems;
    });
  };

  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
  };

  const onHandleModalVisible = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Input
        handleAddItem={handleAddItem}
        onHandleChangeItem={onHandleChangeItem}
        textValue={textValue}
      />

      <View style={styles.body}>
        <Text style={styles.title}>Mis Notas</Text>

        <ItemListContainer
          itemsList={itemsList}
          renderListItem={renderListItem}
        />
        <Modal
          modalVisible={modalVisible}
          onHandleDelete={onHandleDelete}
          onHandleModalVisible={onHandleModalVisible}
          itemName={itemSelected !== null ? itemsList[itemSelected]?.value : ""}
        />
      </View>
    </>
  );
};

export default NoteContainer;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#F5F5F5",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
    textAlign: "center",
    color: "#0c7075",
  },
  itemContainer: {
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#1b3358",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },

  textItem: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    color: "#0c7075",
    fontWeight: "400",
    fontVariant: "no-common-ligatures",
  },

  textComplete: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    textDecorationLine: "line-through",
    color: "#CCC",
  },
});
