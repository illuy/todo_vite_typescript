import { TodoCardItem } from "../../style/TodoStyle";
import { Todo } from "../../types/todoType";

interface TodoItemProps{
    todo: Todo;
}
const TodoItem = ({todo}:TodoItemProps) => {
    const {title, content,deadline,isDone} = todo;
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
                <button>삭제</button>
            </div>
        </article>
    </TodoCardItem>
  )
}

export default TodoItem