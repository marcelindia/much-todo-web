import { useState } from "react";
import { Input } from "antd";

function AddTask() {
  const [newTask, setNewTask] = useState("");

  const taskObject = {
    task: newTask,
  };

  const handleButtonSubmit = () => {
    console.log("sending to API");
    fetch("https://todo-app-dm-164b6.uc.r.appspot.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    })
      .then((response) => response.json())
      .then((data) => console.log("data was added"))
      .catch((err) => console.error(err));
  };
  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };

  console.log("newTask start", newTask);
  return (
    <>
      <Input
        placeholder="Enter New Task"
        onChange={(event) => handleInputText(event)}
      />

      <button onClick={handleButtonSubmit}>Add</button>
    </>
  );
}

export default AddTask;
