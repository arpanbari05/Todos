import { CircularProgress } from "@mui/material";
import React from "react";
import { useGetAllTodosQuery } from "../api/api";
import { formatDate } from "../helper";
import "styled-components/macro";

function AdminTodos() {
  const { data, isFetching } = useGetAllTodosQuery();

  if (isFetching)
    return (
      <div className="flex justify-center mt-8">
        <CircularProgress />
      </div>
    );

  return (
    <div className="px-12 py-8">
      <h1 className="text-3xl font-medium">All todos</h1>
      <p className="my-3">Total {data?.data?.length} todos</p>
      <div>
        <TodoHeader />
        {data?.data?.map((todo, idx) => (
          <TodoItem key={todo._id} todo={todo} sr={idx + 1} />
        ))}
      </div>
    </div>
  );
}

export default AdminTodos;

function TodoItem({ todo, sr }) {
  const { user, description, tag, createdAt } = todo;
  return (
    <div
      className="grid w-[800px] p-4 gap-4"
      css={`
        grid-template-columns: 1fr 4fr 2fr 2fr 2fr;
        &:not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
      `}
    >
      <div>{sr}</div>
      <div>{description}</div>
      <div>{tag}</div>
      <div>{user.name}</div>
      <div>{formatDate(createdAt)}</div>
    </div>
  );
}

function TodoHeader() {
  return (
    <div
      className="grid w-[800px] p-4 gap-4 font-medium"
      css={`
        grid-template-columns: 1fr 4fr 2fr 2fr 2fr;
        &:not(:last-child) {
          border-bottom: 2px solid #ddd;
        }
      `}
    >
      <div>Sr. No</div>
      <div>Description</div>
      <div>Tag</div>
      <div>User Name</div>
      <div>Created At</div>
    </div>
  );
}
