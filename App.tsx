/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import TodoIndex from './src/component/TodoIndex';
import {Todo} from './src/Types/Index';
import TodoList from './src/component/TodoList';
import TodoItem from './src/component/TodoItem';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  //Add Todo in a list
  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  // Delete Todo from the list.
  const deleteTodo = (id: string) => {
    // console.log(id)
    setTodoList(todoList.filter(item => item.id !== id));
  };

  //Edit Todo from the list.
  const editTodo = (id: string, newText: string) => {
    setTodoList(
      todoList.map(item => (item.id === id ? {...item, text: newText} : item)),
    );
  };

  //Checked the todo if completed
  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>
      <TodoIndex onAddTodo={addTodo} />
      <TodoList
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
        todos={todoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:20,
    marginBottom: 20,
    padding: 10,
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default App;
