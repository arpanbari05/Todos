import { CircularProgress } from "@mui/material";
import React from "react";
import "styled-components/macro";
import { useGetCaloriesAvgQuery } from "../api/api";

function AverageCalories() {
  const { data, isFetching } = useGetCaloriesAvgQuery();

  if (isFetching)
    return (
      <div className="my-6 flex items-center justify-center">
        <CircularProgress />
      </div>
    );

  return (
    <div className="grid gap-4 w-[700px] mt-10">
      <h1 className="text-3xl font-medium">
        Average number of calories added per user for the last 7 days
      </h1>
      <CaloriesItemHeader />
      {data?.todos.map((todo, idx) => (
        <CaloriesItem todo={todo} sr={idx + 1} />
      ))}
    </div>
  );
}

export default AverageCalories;

function CaloriesItem({ todo, sr }) {
  const {
    user: { name },
    caloriesAvg,
  } = todo;

  return (
    <div
      className="grid gap-5"
      css={`
        grid-template-columns: 1fr 4fr 3fr;
        & > div {
          padding: 1em;
        }
      `}
    >
      <div>{sr}</div>
      <div>{name}</div>
      <div>{caloriesAvg}</div>
    </div>
  );
}

function CaloriesItemHeader() {
  return (
    <div
      className="grid font-medium gap-5"
      css={`
        grid-template-columns: 1fr 4fr 3fr;
        border-bottom: 2px solid #ddd;
        & > div {
          padding: 1em;
        }
      `}
    >
      <div>Sr. no</div>
      <div>User name</div>
      <div>Last 7 days avg calories</div>
    </div>
  );
}
