import TodoForm from './components/todo/TodoForm'
import TodoList from './components/todo/TodoList'
import useTodos from './hooks/useTodos'
import { Todo } from './types/todoType';

const App = () => {
  const {addTodo,todos,deleteTodo} = useTodos();

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <TodoList todoTitle={'In Progress'} todos={todos} deleteTodo={deleteTodo}/>
      <TodoList todoTitle={'Done'} todos={todos} deleteTodo={deleteTodo}/>
        
    </>
  )
}

export default App
