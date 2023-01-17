import React, { useState, useReducer } from "react";
import { reducerT, initialStateT } from "../../helpers";
import AddTask from "./AddTask";
import "./styleToDo.css";
import Task from "./Task";

function ToDo(props) {
  const taskList = props.state.user.tasks;

  // const [showAddTask, setShowAddTask] = useState(false);

  const [state, dispatch] = useReducer(reducerT, initialStateT);

  return (
    <>
      <div className="toDo_container">
        <h2 className="toDo_title">Zadania</h2>
        <div className="tasks">
          {taskList.map((task) => {
            return <Task taskInfo={task} key={task.title} />;
          })}
          <button
            onClick={() => dispatch({ type: "shTask", payload: true })}
            className="addTaskBtn"
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      {state.show ? <AddTask dispatch={dispatch} /> : null}
    </>
  );
}

export default ToDo;
