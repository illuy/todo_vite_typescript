import React, { useState } from 'react';
import { Todo } from '../../types/todoType';

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 데이터 가져오기
    const formData = new FormData(e.currentTarget);
    const newTitle = formData.get('title') as string;
    const newContent = formData.get('content') as string;

    try {
      // 직접 AJAX 요청을 수행
      const response = await fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });

      if (!response.ok) {
        // 실패 시 처리
        console.error('Todo 추가 실패:', response.statusText);
        return;
      }

      // 성공 시 Todo 추가
      const nextTodo: Todo = {
        id: new Date().toISOString(), // 이 부분을 적절한 고유 ID 생성 방식으로 변경해야 합니다.
        title: newTitle,
        content: newContent,
        isDone: false,
        deadline: new Date().toISOString(),
      };
      addTodo(nextTodo);

      // 폼 입력값 초기화
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Todo 추가 중 에러:', error);
    }
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        {/* 제어되는 컴포넌트로서의 input과 textarea */}
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          id=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">제출하기</button>
      </form>
    </section>
  );
};

export default TodoForm;
