import { CircularProgress } from "@mui/material";
import React from "react";
import { useGetArchivesTodosQuery, useGetPendingTodosQuery } from "../api/api";
import { useMyTodos, useTodaysTodo } from "../customHooks";
import Todos from "./Todos";

// export function AllTodos() {
//   const { todos, isFetching, totalTodos, completedTodos } = useMyTodos();

//   const subtitle = `Completed ${completedTodos}/${totalTodos}`;

//   return (
//     <div>
//       {isFetching ? (
//         <div className="flex justify-center mt-8">
//           <CircularProgress />
//         </div>
//       ) : (
//         <Todos todos={todos} subtitle={subtitle} title={"All todos"} />
//       )}
//     </div>
//   );
// }

export function Today() {
  const { todos, isFetching, totalTodos, completedTodos } = useTodaysTodo();

  const subtitle = `Completed ${completedTodos}/${totalTodos}`;

  return (
    <div>
      {isFetching ? (
        <div className="flex justify-center mt-8">
          <CircularProgress />
        </div>
      ) : (
        <Todos todos={todos} subtitle={subtitle} title={"Today"} />
      )}
    </div>
  );
}

export function AllTodos() {
  const { data, isFetching } = useGetPendingTodosQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const subtitle = `Total ${data?.todos.length}`;

  return (
    <div>
      {isFetching ? (
        <div className="flex justify-center mt-8">
          <CircularProgress />
        </div>
      ) : (
        <Todos todos={data?.todos} subtitle={subtitle} title={"All to-dos"} />
      )}
    </div>
  );
}

export function Archives() {
  const { data, isFetching } = useGetArchivesTodosQuery();

  const subtitle = `Total ${data?.todos.length}`;

  return (
    <div>
      {isFetching ? (
        <div className="flex justify-center mt-8">
          <CircularProgress />
        </div>
      ) : (
        <Todos todos={data?.todos} subtitle={subtitle} title={"Archives"} />
      )}
    </div>
  );
}
