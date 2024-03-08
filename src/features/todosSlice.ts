import { Todo } from "../types/todoType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface TodosState{
    todos: Todo[];
}
const initialState:TodosState = {
    todos:[],
}
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo:(state, action : PayloadAction<Todo>) => {
            state.todos.unshift(action.payload);
        },
        deleteTodo:(state, action:PayloadAction<string>)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        toggleTodoDone:(state, action: PayloadAction<string>) =>{
            state.todos = state.todos.map((todo)=>
            todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
            );
        }
    }
})

export const {addTodo, deleteTodo, toggleTodoDone} = todosSlice.actions;

export default todosSlice.reducer;