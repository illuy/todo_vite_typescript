import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getTodos: builder.query<any, void>({
      query: () => 'todos',
    }),
    addTodo: builder.mutation<any, Partial<{ title: string; content: string }>>({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
    }),
    deleteTodo: builder.mutation<any, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
    toggleTodoDone: builder.mutation<any, { id: string; isDone: boolean }>({
      query: ({ id, isDone }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: { isDone },
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useToggleTodoDoneMutation } = todoApi;