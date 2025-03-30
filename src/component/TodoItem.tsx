import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Todo} from '../Types/Index';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todoItem: Todo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem,
  onToggle,
  onDelete,
  onEdit,
}) => {

  const [isEditing, setIsEditing] = useState(false);

  //changing the text in EDIT.
  const handleEdit = (newText: string) => {
    onEdit(newText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <TodoEdit
        todo={todoItem}
        onSave={handleEdit}
        onCancle={() => setIsEditing(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.listItem}>
        <Text
          style={[
            styles.listItemText,
            todoItem?.completed && styles.todoComplete,
          ]}>
          {todoItem.text}
        </Text>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.editBtn}
          disabled = {!!todoItem?.completed}
          onPress={() => setIsEditing(true)}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    flex: 1,
  },
  listItemText: {
    fontSize: 16,
  },
  todoComplete: {
    textDecorationLine: 'line-through',
    color: 'lightgrey',
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  editBtn: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
  },
  deleteBtn: {
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'orange',
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: 18,
  },
});

export default TodoItem;
