import React, { useContext } from "react";
import TasksContext from "../../../context/TasksProvider";

const Tasks = () => {
  const { todoTasks } = useContext(TasksContext);
  return (
    <ul className="w-1/2 px-0.5 flex flex-col gap-4 py-4">
      {todoTasks !== undefined
        ? todoTasks.map((task) => {
            return (
              <li
                key={task._id}
                className={` text-lg text-dark font-medium tracking-wider py-2 w-full px-4 rounded`}
                style={{ backgroundColor: task.color }}
              >
                {task.title}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Tasks;
