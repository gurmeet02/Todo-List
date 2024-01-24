import { createContext, useEffect, useState } from "react";

const TasksContext = createContext({});

export const TasksProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tasks")
      .then((resp) => resp.json())
      .then((data) => setTodoTasks(data.tasks));
    console.log(todoTasks);
  }, []);

  return (
    <TasksContext.Provider value={{ todoTasks, setTodoTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
