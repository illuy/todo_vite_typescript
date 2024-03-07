import { TodoCardItem } from "../../style/TodoStyle";
import { Todo } from "../../types/todoType";

interface TodoItemProps{
    todo: Todo;
    deleteTodo:(id:string) => void;
}
const TodoItem = ({todo, deleteTodo}:TodoItemProps) => {
    const {title, content,deadline,isDone,id} = todo;

    const onClickDelete = () => deleteTodo(id);
  return (
    <TodoCardItem $isDone={isDone}>
        <article>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <time>{deadline}</time>
            </div>
            <div>
                <button>완료</button>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </article>
    </TodoCardItem>
  )
}

export default TodoItem