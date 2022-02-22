import { List, Checkbox, Button, Popconfirm, message } from "antd";
import { useState, useEffect } from "react";

function Task({ item, setTasks, setLoading }) {
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({
        color: "grey",
        textDecoration: "line-through",
        display: "flex",
        width: "auto",
      });
    } else {
      setItemStyle({
        color: "black",
        textDecoration: "none",
        display: "flex",
        width: "auto",
      });
    }
  }, [item]);
  const handleToggleTaskDone = () => {
    setLoading(true);
    //check if task is done or not
    //taskID
    //call API-- patch:  `/tasks/{item.id}` send {done: !item.done}
    //THEN:fetch our tasks
    //THEN: setTasks(data)

    fetch(`https://todo-app-dm-164b6.uc.r.appspot.com/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
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
  function cancel(e) {
    e.preventDefault();
    console.log(e);
    message.error("Click on No");
  }
  const handleDelete = (e) => {
    setLoading(true);
    fetch(`https://todo-app-dm-164b6.uc.r.appspot.com/tasks/${item.id}`, {
      method: "DELETE",
    })
      .then(() => {
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

  return (
    <>
      <List.Item style={itemStyle}>
        <Checkbox onClick={handleToggleTaskDone} checked={item.done}></Checkbox>
        &nbsp; &nbsp;
        {item.task}
        <Button type="dashed" style={{ alignSelf: "flex-end" }} danger>
          <Popconfirm
            title="Are you sure you want to delete this task?"
            onConfirm={handleDelete}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            Delete
          </Popconfirm>
        </Button>
      </List.Item>
    </>
  );
}

export default Task;
