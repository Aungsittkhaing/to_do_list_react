import React from "react";
import Cart from "./Cart";

const List = ({ tasks, deleteTask, doneTask }) => {
  return (
    <div>
      <Cart tasks={tasks} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  );
};

export default List;
