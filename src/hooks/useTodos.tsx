import { useState } from "react"
import { Todo } from "../types/todoType";

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodo = (todo:Todo)=>{
        setTodos((prevTodos)=>[todo,...prevTodos]);
    }
    const deleteTodo = (id:string) =>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=> todo.id !== id) )

    }
  return {
    todos,
    addTodo,
    deleteTodo,
  }
}

export default useTodos