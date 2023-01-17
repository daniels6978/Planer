import React, { useState } from "react";
import "./styleToDo.css";

function Task(props) {
  const [isActive, setisActive] = useState("no");

  const show = () => {
    if (isActive === "no") {
      setisActive("active");
    }
    if (isActive === "active") {
      setisActive("no");
    }
  };

  const { title, taskDescription, taskDeadline, cost } = props.taskInfo;

  return (
    <div className="task">
      <button onClick={show} className="taskTitle">
        <p>{title}</p>
      </button>

      <div className="taskEdit">
        <button>
          <i className="fa fa-check"></i>
        </button>
        <button>
          <i className="fa fa-pencil"></i>
        </button>
        <button>
          <i className="fa fa-trash"></i>
        </button>
      </div>
      <div className={`task_content ${isActive}`}>
        <div className="taskDescription">
          <p>{taskDescription}</p>
          <p>{cost}</p>
          <p>{taskDeadline}</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
