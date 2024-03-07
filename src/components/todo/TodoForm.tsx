import React from 'react'

export const TodoForm = () => {
    const onSubmit = (e: React.FormEvent<HTMLElement>) =>{
        e.preventDefault();
        
    }

  return (
    <section onSubmit={onSubmit}>
        <form >
            <input type="text" name='title' />
            <textarea name="content" id=""></textarea>
            <button type='submit'>제출하기</button>
        </form>
    </section>
  )
}
export default TodoForm;