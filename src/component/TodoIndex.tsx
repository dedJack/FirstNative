import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface TodoIndexProps {
  onAddTodo: (text: string) => void;
}

const TodoIndex: React.FC<TodoIndexProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');
  //Add button calls the funtion to add todo in a list.
  const handleAddBtn = () => {
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.todoInput}
        value={text}
        onChangeText={setText}
        placeholder="Add item to list..."
      />
      <TouchableOpacity style={styles.addBtn} onPress={handleAddBtn}>
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  todoInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    paddingHorizontal: 10,
    marginRight: 5,
    fontSize: 15,
  },
  addBtn: {
    backgroundColor: 'lightblue',
    marginHorizontal: 5,
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  addBtnText: {
    margin: 8,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default TodoIndex;
