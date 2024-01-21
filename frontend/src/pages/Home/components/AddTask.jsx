import React, { useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    setTitle("");
    try {
      let response = await fetch("http://localhost:8080/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="w-1/2 rounded-lg p-4 card">
      <form onSubmit={addTask} className="flex gap-2" action="/" method="POST">
        <input
          type="text"
          name="taskTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="What's the task"
          className="w-5/6 outline-none border-2 border-light rounded-md px-3 py-1 text-lg focus:border-primary"
        />
        <button
          className="bg-primary w-1/6 text-lg font-medium transition-all text-white hover:brightness-95 rounded-md active:scale-95"
          type="submit"
        >
          Add
        </button>
      </form>
    </main>
  );
};

export default AddTask;
