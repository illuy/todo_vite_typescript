import TodoForm from './components/todo/TodoForm'
import TodoList from './components/todo/TodoList'
import useTodos from './hooks/useTodos'
import { Todo } from './types/todoType';

const App = () => {
  const {addTodo,todos} = useTodos();

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <TodoList todoTitle={'In Progress'} todos={todos} ></TodoList>
      <TodoList todoTitle={'Done'} todos={todos} ></TodoList>
        
    </>
  )
}

export default App
