import { CircularProgress } from "@mui/material";
import React from "react";
import { useGetUsersQuery } from "../api/api";
import "styled-components/macro";

function Users() {
  const { data, isFetching } = useGetUsersQuery();

  if (isFetching)
    return (
      <div className="flex justify-center mt-8">
        <CircularProgress />
      </div>
    );

  return (
    <div className="py-8 px-12">
      <h1 className="text-3xl font-medium">Users</h1>
      <p className="my-3">Total {data?.users?.length} users</p>
      <UserHeader />
      {data?.users?.map((user, idx) => (
        <UserItem user={user} sr={idx + 1} />
      ))}
    </div>
  );
}

export default Users;

function UserItem({ user, sr }) {
  const { name, email } = user;
  return (
    <div
      className="grid w-[600px] p-4 gap-4"
      css={`
        grid-template-columns: 1fr 2fr 3fr;
        &:not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
      `}
    >
      <div>{sr}</div>
      <div>{name}</div>
      <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
        {email}
      </a>
    </div>
  );
}

function UserHeader() {
  return (
    <div
      className="grid w-[600px] p-4 gap-4 font-medium"
      css={`
        grid-template-columns: 1fr 2fr 3fr;
        &:not(:last-child) {
          border-bottom: 2px solid #ddd;
        }
      `}
    >
      <div>Sr. no</div>
      <div>Name</div>
      <div>Email</div>
    </div>
  );
}
