import { Checkbox } from "@mui/material";
import React from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../api/api";
import { formatDate } from "../helper";
import { useState } from "react";
import { Loader } from ".";

function Todos({ todos, title, subtitle }) {
  return (
    <div className="py-10 px-20">
      <h1 className="font-medium text-3xl">{title}</h1>
      <p className="text-gray-700">{subtitle}</p>
      <div className="grid gap-10 mt-10">
        {todos?.map((todo) => (
          <TodoItem todo={todo} key={todo._id} />
        ))}
      </div>
    </div>
  );
}

function TodoItem({ todo }) {
  const { isCompleted, dueDate, completedAt, description, tag, _id } = todo;

  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  const [checked, setChecked] = useState(isCompleted);

  const [updateTodo] = useUpdateTodoMutation();

  const handleCompleteChange = (e) => {
    const { checked } = e.target;
    setChecked(checked);
    updateTodo({ id: _id, isCompleted: checked });
  };

  const handleDelete = () => {
    deleteTodo(_id);
  };

  return (
    <div className="flex items-center gap-4 w-[700px]">
      <Checkbox
        size="medium"
        checked={checked}
        onChange={handleCompleteChange}
      />
      <div className="flex justify-between items-start w-full">
        <div>
          <div className="flex items-center gap-5 mb-2">
            <p className="font-medium text-xl">{description}</p>
            <div className="px-3 py-1 rounded-full text-xs text-primary bg-primary_shade w-max capitalize">
              {tag}
            </div>
          </div>
          {!isCompleted ? (
            <p className="text-xs text-amber-500 w-max">
              Due: {formatDate(dueDate)}
            </p>
          ) : (
            <p className="px-3 py-1 rounded-full text-xs text-green-500 bg-green-100 w-max">
              Completed at: {formatDate(completedAt)}
            </p>
          )}
        </div>
        <button
          onClick={handleDelete}
          className="w-12 bg-red-500 text-white flex items-center justify-center rounded-md px-2 py-1 text-xs border-none outline-none hover:shadow-sm"
        >
          {isLoading ? <Loader size={13} /> : <>Delete</>}
        </button>
      </div>
    </div>
  );
}

export default Todos;
