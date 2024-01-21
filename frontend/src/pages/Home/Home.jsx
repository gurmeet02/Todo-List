import React from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const Home = () => {
  return (
    <section className="flex justify-center items-center py-24 flex-col gap-6 container">
      <h1 className="text-primary">Add Task</h1>
      <AddTask />
      <Tasks />
    </section>
  );
};

export default Home;
