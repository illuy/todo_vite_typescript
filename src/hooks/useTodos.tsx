import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addTodo, deleteTodo, toggleTodoDone } from '../features/todosSlice';
import { DoneTodo, InProgressTodo, Todo } from '../types/todoType';

const useTodos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos.todos);
  const inProgressTodos = todos.filter((todo)=> !todo.isDone) as InProgressTodo[];
  const doneTodos = todos.filter((todo)=> todo.isDone) as DoneTodo[];

  const addTodoHandler = (todo: Todo) => {
    dispatch(addTodo(todo));
  };

  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleTodoDoneHandler = (id: string) => {
    dispatch(toggleTodoDone(id));
  };

  return {
    todos,
    inProgressTodos,
    doneTodos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
    toggleTodoDone: toggleTodoDoneHandler,
  };
};

export default useTodos;
