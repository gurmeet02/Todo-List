import React, { useState, useContext } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TasksContext from "../../context/TasksProvider";

const Home = () => {
  const [colorNumber, setColorNumber] = useState(0);
  const colors = [
    // Green
    "#B1FFB1",
    // Red
    "#FFB1B1",
    // Blue
    "#B1C9FF",
    // Yellow
    "#FFF4B1",
    // Cyan
    "#B1FFF4",
    // Purple
    "#D8B1FF",
  ];

  const [title, setTitle] = useState("");
  const { setTodoTasks } = useContext(TasksContext);

  const addTask = async (e) => {
    if (colorNumber > 5) {
      setColorNumber(0);
    } else {
      setColorNumber(colorNumber + 1);
    }
    e.preventDefault();
    setTitle("");
    try {
      let response = await fetch("http://localhost:8080/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, color: colors[colorNumber] }),
      });
      const data = await response.json();
      console.log(data);
      setTodoTasks((oldTasks) => [...oldTasks, data.result]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex justify-center items-center py-24 flex-col container">
      <h1 className="text-primary pb-6">Add Task</h1>
      <AddTask addTask={addTask} title={title} setTitle={setTitle} />
      <Tasks colorNumber={colorNumber} colors={colors} />
    </section>
  );
};

export default Home;
