import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState();
  return (
    <section
      style={{
        background: "white",
        padding: "0 40px 40px",
        // marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        loading={loading}
        setLoading={setLoading}
      />
      <br />
      <AddTask setTasks={setTasks} setLoading={setLoading} />
    </section>
  );
}

export default Main;
