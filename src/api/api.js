import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const { REACT_APP_API_URL: baseUrl } = process.env;
const baseUrl = "http://localhost:8000/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Todos", "Users"],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    getTodo: builder.query({
      query: (id) => `/todos/${id}`,
      providesTags: ["Todos"],
    }),
    getMyTodos: builder.query({
      query: () => `/todos/my-todos`,
      providesTags: ["Todos"],
    }),
    getTodaysTodos: builder.query({
      query: () => `/todos/today`,
      providesTags: ["Todos"],
    }),
    getArchivesTodos: builder.query({
      query: () => `/todos/archives`,
      providesTags: ["Todos"],
    }),
    getPendingTodos: builder.query({
      query: () => `/todos/pending`,
      providesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, isCompleted }) => {
        return {
          url: `/todos/${id}`,
          method: "PATCH",
          body: { isCompleted },
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({ url: `/todos/${id}`, method: "DELETE" }),
      invalidatesTags: ["Todos"],
    }),
    createTodo: builder.mutation({
      query: (creds) => ({ url: "/todos", method: "POST", body: creds }),
      invalidatesTags: ["Todos"],
    }),
    login: builder.mutation({
      query: (creds) => ({ url: `/users/login`, method: "POST", body: creds }),
      invalidatesTags: ["Users"],
    }),
    signup: builder.mutation({
      query: (creds) => ({ url: `/users/signup`, method: "POST", body: creds }),
      invalidatesTags: ["Users"],
    }),
    getMe: builder.query({
      query: () => "/users/me",
      providesTags: ["Users"],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getCaloriesAvg: builder.query({
      query: () => "todos/avg-calories",
    }),
  }),
});

export default api;

export const {
  useGetAllTodosQuery,
  useGetTodoQuery,
  useUpdateTodoMutation,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetMyTodosQuery,
  useGetCaloriesAvgQuery,
  useGetPendingTodosQuery,
  useGetArchivesTodosQuery,
  useGetTodaysTodosQuery,
  useLoginMutation,
  useSignupMutation,
  useGetMeQuery,
  useGetUsersQuery,
} = api;
