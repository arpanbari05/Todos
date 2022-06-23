import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  useGetMeQuery,
  useGetMyTodosQuery,
  useGetTodaysTodosQuery,
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

  const completedTodos =
    data?.todos?.filter((todo) => todo.isCompleted)?.length || 0;

  return {
    isFetching,
    todos: data?.todos,
    completedTodos,
    totalTodos: data?.todos?.length,
  };
}

export function useTodaysTodo() {
  const { data, isFetching } = useGetTodaysTodosQuery();

  const completedTodos =
    data?.todos?.filter((todo) => todo.isCompleted)?.length || 0;

  return {
    isFetching,
    todos: data?.todos,
    completedTodos,
    totalTodos: data?.todos?.length,
  };
}

export function useGetNavLinks() {
  const { data, isFetching } = useGetMeQuery();

  let navLinks = [
    {
      label: "All todos",
      to: "/home",
    },
    {
      label: "Today",
      to: "today",
    },
    {
      label: "Archives",
      to: "archives",
    },
  ];

  if (data?.user?.type === "admin") {
    navLinks = [
      {
        label: "All todos",
        to: "todos",
      },
      {
        label: "Reports",
        to: "reports",
      },
      {
        label: "User",
        to: "users",
      },
    ];
  }

  return {
    isFetching,
    navLinks,
  };
}
