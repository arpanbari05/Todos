import React from "react";
import { useGetMeQuery } from "../api/api";
import { ImUser } from "react-icons/im";
import { MatButton } from ".";
import AddTodo from "./AddTodo";
import { useToggle } from "../customHooks";

function TopHeader() {
  const { data } = useGetMeQuery();

  const addTodoPopup = useToggle(false);

  return (
    <header className="h-[70px] flex items-center justify-end px-12 shadow-sm sticky top-0 left-0 bg-white z-10">
      <div className="flex items-center gap-3">
        {data?.user?.type !== "admin" && (
          <MatButton className={"w-max"} onClick={addTodoPopup.handleOpen}>
            Add Task
          </MatButton>
        )}
        <div className="flex items-center justify-center bg-gray-100 text-gray-400 h-12 w-12 ml-6 rounded-full">
          <ImUser size={30} />
        </div>
        <p className="font-medium text-md">{data?.user?.name}</p>
      </div>
      {addTodoPopup.show && <AddTodo handleClose={addTodoPopup.handleClose} />}
    </header>
  );
}

export default TopHeader;
