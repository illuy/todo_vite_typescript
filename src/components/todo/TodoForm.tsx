import React from 'react'
import { Todo } from '../../types/todoType';

export const TodoForm = () => {
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