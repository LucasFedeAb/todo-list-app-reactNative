import {
  TouchableOpacity,
  Modal as NewModal,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

const Modal = ({
  modalVisible,
  onHandleDelete,
  onHandleModalVisible,
  itemName,
}) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalMessage}>
            <Text style={styles.colorTextModal}>
              {`¿Estas seguro de eliminar "${itemName?.toUpperCase()}" de la lista?`}
            </Text>
          </View>
          <View style={styles.modalButton}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={onHandleModalVisible}
            >
              <Text style={styles.colorTextModal}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDelete} onPress={onHandleDelete}>
              <Text style={styles.colorTextModal}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1b3358",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    backgroundColor: "#ccc",
    color: "#FFF",
    fontSize: 18,
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    paddingVertical: 10,
  },
  modalButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
  },
  btnCancel: {
    padding: 15,
    backgroundColor: "#0c7075",
    borderRadius: 10,
  },
  btnDelete: {
    padding: 15,
    backgroundColor: "darkred",
    borderRadius: 10,
  },
  colorTextModal: {
    color: "#fff",
  },
});
