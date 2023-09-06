import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddItem from "./src/AddItem";
import ListItem from "./src/ListItem";


const initialState = [
  { id: 1, text: "Harina" },
  { id: 2, text: "Azucar" },
  { id: 3, text: "Cereales" },
];
export default function App() {
  const [text, setText] = useState("");

  const [list, setList] = useState(initialState);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [version, setVersion] = useState(0);

  const addItem = () => {
    list.push({
      id: Math.random(),
      text: text,
    });

    setList(list);
    setText("");
  };

  const clearList = () => {
    setList([]);
    setIsModalVisible(false);
  };

  function handleReset() {
    setVersion(version + 1);
  }


  return (
    <View style={styles.contenedor}>
      {/* <Modal transparent={true} visible={isModalVisible}>
        <View>
          <Text> ¿Estas seguro que deseas eliminar la lista? </Text>

          <Pressable onPress={() => clearList()}>
            <Text>SI</Text>
          </Pressable>

          <Pressable onPress={() => setIsModalVisible(false)}>
            <Text> NO </Text>
          </Pressable>
        </View>
      </Modal> */}

      <Image
        style={styles.imagen}
        source={{
          uri: "https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-check-list-icon-isolated-on-abstract-background-png-image_1776830.jpg",
        }}
      />

      <Text style={styles.titulo}> Lista de compras </Text>

      <AddItem text={text} setText={setText} addItem={addItem} />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
      <Pressable style={styles.button} onPress={() => setIsModalVisible(true)}>
        <Ionicons name="trash" size={40} color="red" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: "red",
    borderBottomWidth: 5,
  },

  imagen: {
    height: 100,
    width: 100,
    marginTop: 40,
  },
});