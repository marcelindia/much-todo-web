import { useState } from "react";
import { Input } from "antd";

function AddTask({ setTasks, setLoading }) {
  const [newTask, setNewTask] = useState("");

  const handleButtonSubmit = () => {
    if (newTask.trim() === "") {
      //if the new task is empty don't do anything
      return;
    }
    const taskObject = {
      task: newTask,
    };
    setLoading(true);

    fetch("https://todo-app-dm-164b6.uc.r.appspot.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject), //stringify>> '{"task":"new task"}
    })
      // what we want to do in the .then ()--we got a new task,lets update the list
      .then(() => {
        setNewTask("");
        fetch("https://todo-app-dm-164b6.uc.r.appspot.com/tasks")
          .then((response) => response.json())
          .then((data) => {
            setTasks(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };
  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <>
      <Input.Search
        value={newTask}
        placeholder="Enter New Task"
        enterButton="Add Task"
        size="large"
        onSearch={handleButtonSubmit}
        onChange={(event) => handleInputText(event)}
      />
    </>
  );
}

export default AddTask;
