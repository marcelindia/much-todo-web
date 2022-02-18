import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

const fakeTasks = [
  {
    id: 1,
    task: "Buy Cereal",
    done: true,
  },
  {
    id: 2,
    task: "Throw away Wine",
    done: false,
  },
  {
    id: 3,
    task: "Give Bandaids to Lola",
    done: true,
  },
  {
    id: 4,
    task: "Buy Watermelon",
    done: false,
  },
  {
    id: 5,
    task: "Eat Apples",
    done: false,
  },
];

function TaskList() {
  const [tasks, setTasks] = useState(fakeTasks);
  useEffect(() => {
    fetch("https://todo-app-dm-164b6.uc.r.appspot.com/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch(alert);
  }, []);
  return (
    <List
      bordered
      dataSource={tasks}
      renderItem={(item) => <Task item={item} />}
    />
  );
}

export default TaskList;
