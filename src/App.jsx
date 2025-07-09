import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import { api } from "./api/apiResource";
import List from "./components/List";
import uuid from "react-uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    //fetch from json server
    let res = await api.get("/todolists");
    setTasks(res.data);
    // console.log(res.data);
  };

  const addUser = async (userTasks) => {
    //add to json server
    const data = {
      id: uuid(),
      task: userTasks,
      completed: false,
    };
    // console.log(data);
    await api.post("/todolists", data);
  };
  //remove data from json server
  const deleteTask = async (taskId) => {
    await api.delete(`/todolists/${taskId}`);
  };
  //done task
  const doneTask = async (taskId, completed) => {
    await api.patch(`/todolists/${taskId}`, { completed });
  };
  useEffect(() => {
    fetchData(); //call the function
  }, [tasks]);
  return (
    <>
      <Form
        tasks={tasks}
        addUser={addUser}
        deleteTask={deleteTask}
        doneTask={doneTask}
      />
    </>
  );
};

export default App;
