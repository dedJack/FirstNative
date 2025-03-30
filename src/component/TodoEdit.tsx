import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Todo} from '../Types/Index';

interface TodoEditProps {
  todo: Todo;
  onSave: (newText: string) => void;
  onCancle: () => void;
}

const TodoEdit: React.FC<TodoEditProps> = ({todo, onCancle, onSave}) => {
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onSave(editText.trim());
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={editText}
        onChangeText={setEditText}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.btnText}>save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancleBtn} onPress={onCancle}>
          <Text style={styles.btnText}>cancle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputField: {
    flex: 1,
    borderColor: 'grey',
    marginRight: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  saveBtn: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  cancleBtn: {
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'red',
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: 18,
    color:'white'
  },
});

export default TodoEdit;
