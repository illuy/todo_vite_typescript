
import { Todo } from '../types/todoType'

export const sampleTodo: Todo = {
    id: '1',
    title: 'Sample Todo',
    content: 'This is a spamle',
    isDone: false,
    deadline: new Date().toISOString(),
}