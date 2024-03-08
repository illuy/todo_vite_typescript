import { TodoCardItem } from "../../style/TodoStyle";
import { Todo } from "../../types/todoType";

interface TodoItemProps{
    todo: Todo;
    deleteTodo:(id:string) => void;
    toggleTodoDone:(id:string) => void;
}
const TodoItem = ({todo, deleteTodo,toggleTodoDone}:TodoItemProps) => {
    const {title, content,deadline,isDone,id} = todo;

    const onClickDelete = () => deleteTodo(id);
    const onClickToggleDone = () => toggleTodoDone(id);
  return (
    <TodoCardItem $isDone={isDone}>
        <article>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <time>{deadline}</time>
            </div>
            <div>
                <button onClick={onClickToggleDone}>{isDone ? '취소' : '완료'}</button>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </article>
    </TodoCardItem>
  )
}

export default TodoItem