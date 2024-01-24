import React, { useState, useContext } from "react";

const AddTask = ({ addTask, title, setTitle }) => {

  return (
    <main className="w-1/2 rounded-lg py-4 card bg-white">
      <form onSubmit={addTask} className="flex gap-2" action="/" method="POST">
        <input
          type="text"
          name="taskTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="What's the task"
          className="w-5/6 outline-none border-2 border-light rounded-md px-4 py-1 text-lg focus:border-primary"
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
