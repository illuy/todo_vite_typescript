import { Todo } from "../../types/todoType";

interface TodoListProps{
    todoTitle:string;
    todos:Todo[];
}

const TodoList = ({todoTitle, todos}:TodoListProps) => {
  return (
    <section>
        <h2>{todoTitle}</h2>

        <div>
            <ul>
               {todos.map((todo)=>(
                <li key={todo.id}>{todo.title}</li>
               ))}
            </ul>
        </div>
    </section>
  )
}

export default TodoList