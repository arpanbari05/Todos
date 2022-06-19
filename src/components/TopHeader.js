import React from "react";
import { useGetMeQuery } from "../api/api";
import { ImUser } from "react-icons/im";

function TopHeader() {
  const { data, isFetching } = useGetMeQuery();
  console.log({ data });
  return (
    <header className="h-[70px] flex items-center justify-between px-12 shadow-sm">
      <div>{/* image */}</div>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center bg-gray-100 text-gray-400 h-12 w-12 rounded-full">
          <ImUser size={30} />
        </div>
        <p className="font-medium text-md">Hello user</p>
      </div>
    </header>
  );
}

export default TopHeader;
