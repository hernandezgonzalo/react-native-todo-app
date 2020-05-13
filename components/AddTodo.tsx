import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Alert } from "react-native";

export interface AddTodoProps {
  submitHandler: Function;
}

const AddTodo: React.FC<AddTodoProps> = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (value: string) => {
    setText(value);
  };

  const onPressHandler = () => {
    if (text.length > 3) {
      submitHandler(text);
      setText("");
    } else {
      Alert.alert("OOPS!", "You have to write at least 3 letters", [
        { text: "Ok", onPress: () => console.log("Ok button pressed") }
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        value={text}
        onChangeText={changeHandler}
        onSubmitEditing={onPressHandler}
      />
      <Button onPress={onPressHandler} title="add todo" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

export default AddTodo;
