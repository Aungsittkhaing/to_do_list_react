import React, { useState } from "react";
import List from "./List";
const Form = ({ tasks, addUser, deleteTask, doneTask }) => {
  const [userTask, setUserTask] = useState("");

  const formSubmitHandler = () => {
    if (userTask !== "") {
      addUser(userTask);
      setUserTask("");
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">📝 To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            id="taskInput"
            value={userTask}
            onChange={(e) => setUserTask(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
            onClick={() => formSubmitHandler()}
          >
            Add
          </button>
        </div>
        <List tasks={tasks} deleteTask={deleteTask} doneTask={doneTask} />
      </div>
    </div>
  );
};

export default Form;
