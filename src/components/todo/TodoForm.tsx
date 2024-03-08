import React, { useState } from 'react'
import { Todo } from '../../types/todoType';

interface TodoFormProps{
    addTodo:(todo:Todo) => void
}

export const TodoForm = ({addTodo}:TodoFormProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        const nextTodo: Todo = {
            id:crypto.randomUUID(),
            title,
            content,
            isDone :false,
            deadline : new Date().toISOString(),
        }
        addTodo(nextTodo);

            // 폼 입력값 초기화
        setTitle('');
        setContent('');
    }

  return (
    <section >
        <form onSubmit={onSubmit}>
            <input type="text" name='title' />
            <textarea name="content" id=""></textarea>
            <button type='submit'>제출하기</button>
        </form>
    </section>
  )
}
export default TodoForm;