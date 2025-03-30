import { ScrollView, StyleSheet, Text } from "react-native"
import React from "react"
import { Todo } from "../Types/Index"
import TodoItem from "./TodoItem"


interface TodoListProps{
    todos : Todo[];
    onDeleteTodo : (id :string)=> void;
    onEditTodo: (id:string, newText:string)=>void;
    onToggleTodo: (id:string)=>void;
}
const TodoList:React.FC<TodoListProps> = ({todos,onToggleTodo, onDeleteTodo, onEditTodo })=>{
    return(
        <ScrollView style={styles.container}>
           {todos.length > 0 ?todos.map(todos=>
            <TodoItem 
            key={todos.id}
            onToggle={()=>onToggleTodo(todos.id)}
            onDelete={()=>onDeleteTodo(todos.id)}
            onEdit={newText=>onEditTodo(todos.id,newText)}
            todoItem={todos}
            />
           ): <Text style={styles.noItemText}>No Todo's to display</Text> }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
 container:{
    marginBottom:20,   
 },
 noItemText:{
    flex:1,
    fontSize:25,
    textAlign:"center",
    fontWeight:"bold"
 }
})

export default TodoList;