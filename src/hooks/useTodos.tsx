import { useState } from "react"
import { Todo } from "../types/todoType";

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodo = (todo:Todo)=>{
        setTodos((prevTodos)=>[todo,...prevTodos]);
    }
  return {
    todos,
    addTodo,
  }
}

export default useTodos