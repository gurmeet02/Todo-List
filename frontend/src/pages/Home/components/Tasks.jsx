import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    let resp = await fetch("http://localhost:8080/tasks");
    let tasks = await resp.json();
    setTasks(tasks);
    console.log(tasks);
  };

  useEffect(() => {
    fetchTasks;
  }, []);
  return (
    <ul>
      {tasks.map((task) => {
        return <li>{task.title}</li>;
      })}
    </ul>
  );
};

export default Tasks;
