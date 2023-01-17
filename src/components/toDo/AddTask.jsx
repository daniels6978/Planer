import React, { useState } from "react";

function AddTask(props) {
  const [taskToAdd, setTaskToAdd] = useState({
    idUser: window.localStorage.getItem("userId"),
    title: "",
    taskDescription: "",
    cost: "",
    taskDeadline: "",
    finished: false,
  });

  const handleAddTask = async () => {
    if (
      taskToAdd.title !== "" &&
      taskToAdd.taskDescription !== "" &&
      taskToAdd.cost !== "" &&
      taskToAdd.taskDeadline !== ""
    ) {
      props.dispatch({ type: "shTask", payload: false });
      const response = await fetch(
        "http://localhost:8080/planerWeselny/addTask",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(taskToAdd),
        }
      );

      const data = await response.json();
      props.dispatch({ type: "updateData", payload: data });
    }
  };

  return (
    <div className="addTaskBg">
      <div className="addTask">
        <h3>Dodaj zadanie</h3>
        <button onClick={() => props.handleClose(false)} className="closeBtn">
          <i className="fa fa-close"></i>
        </button>
        <div className="imputs">
          <input
            onChange={(e) =>
              setTaskToAdd({ ...taskToAdd, title: e.target.value })
            }
            type="text"
            placeholder="Tytuł"
          />
          <input
            onChange={(e) =>
              setTaskToAdd({ ...taskToAdd, taskDescription: e.target.value })
            }
            type="text"
            placeholder="Opis"
          />
          <input
            onChange={(e) =>
              setTaskToAdd({ ...taskToAdd, cost: e.target.value })
            }
            type="text"
            placeholder="Koszt"
          />
          <input
            onChange={(e) =>
              setTaskToAdd({ ...taskToAdd, taskDeadline: e.target.value })
            }
            type="date"
            placeholder="Koszt"
          />
          <button onClick={handleAddTask} className="addTaskBtn">
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
