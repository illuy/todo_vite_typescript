import TodoForm from './components/todo/TodoForm'
import TodoList from './components/todo/TodoList'
import useTodos from './hooks/useTodos'
import { Todo } from './types/todoType';

const App = () => {
  const {addTodo,deleteTodo,toggleTodoDone,inProgressTodos,doneTodos} = useTodos();

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <TodoList todoTitle={'In Progress'} todos={inProgressTodos} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone}/>
      <TodoList todoTitle={'Done'} todos={doneTodos} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone}/>
        
    </>
  )
}

export default App
