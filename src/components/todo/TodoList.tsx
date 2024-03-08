import { Todo } from "../../types/todoType";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todoTitle:string;
    todos:Todo[];
    deleteTodo:(id:string) => void;
    toggleTodoDone: (id:string) => void;
}

const TodoList = ({todoTitle, todos, deleteTodo, toggleTodoDone}:TodoListProps) => {
  return (
    <section>
        <h2>{todoTitle}</h2>

        <div>
            <ul>
               {todos.map((todo)=>(
               <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone}/>
               ))}
            </ul>
        </div>
    </section>
  )
}

export default TodoList