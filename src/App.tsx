import { useState } from 'react'
import TodoForm from './components/todo/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoForm></TodoForm>
        
    </>
  )
}

export default App
