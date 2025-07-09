import React from "react";

const Cart = ({ tasks, deleteTask, doneTask }) => {
  const handleDeleteTask = (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };
  return (
    <div>
      {tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              className={
                task.completed
                  ? "bg-gray-100 cursor-pointer p-4 rounded-lg shadow-md flex items-center justify-between line-through text-gray-400"
                  : "bg-gray-100 cursor-pointer p-4 rounded-lg shadow-md flex items-center justify-between"
              }
              key={task.id}
            >
              <input
                type="checkbox"
                onClick={() => doneTask(task.id, !task.completed)}
                defaultChecked={task.completed}
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600"
              />
              {task.task}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                onClick={() => handleDeleteTask(task.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-red-500 text-center">No Task</h1>
      )}
    </div>
  );
};

export default Cart;
