import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export interface TodoItemProps {
  item: { text: String; key: String };
  pressHandler: Function;
}

const TodoItem: React.SFC<TodoItemProps> = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  }
});

export default TodoItem;
