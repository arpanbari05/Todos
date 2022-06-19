import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  useGetMyTodosQuery,
  useGetPendingTodosQuery,
  useGetTodaysTodosQuery,
  useGetTodoQuery,
} from "../api/api";

export function useToggle(initialValue = false) {
  const [show, setShow] = useState(initialValue);

  const handleOpen = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleToggle = () => setShow((prev) => !prev);

  return {
    show,
    handleOpen,
    handleClose,
    handleToggle,
  };
}

export function useHeaderTitle() {
  const isAnalyticsRoute = useRouteMatch("/analytics");
  const isEmployeesRoute = useRouteMatch("/employees");
  const isAddEmployeeRoute = useRouteMatch("/add-employee");

  const title = isAnalyticsRoute
    ? "Analytics"
    : isEmployeesRoute
    ? "Employees"
    : isAddEmployeeRoute
    ? "Add Employee"
    : "";

  return {
    title,
  };
}

export function useMyTodos() {
  const { data, isFetching } = useGetMyTodosQuery();

  const pendingTodos =
    data?.todos?.filter((todo) => !todo.isCompleted)?.length || 0;

  return {
    isFetching,
    todos: data?.todos,
    pendingTodos,
    totalTodos: data?.todos?.length,
  };
}

export function useTodaysTodo() {
  const { data, isFetching } = useGetTodaysTodosQuery();

  const pendingTodos =
    data?.todos?.filter((todo) => !todo.isCompleted)?.length || 0;

  return {
    isFetching,
    todos: data?.todos,
    pendingTodos,
    totalTodos: data?.todos?.length,
  };
}