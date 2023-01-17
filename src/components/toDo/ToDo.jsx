import React, { useState, useReducer } from "react";
import { reducerT, initialStateT } from "../../helpers";
import AddTask from "./AddTask";
import "./styleToDo.css";
import Task from "./Task";

function ToDo(props) {
  if (!props.state?.user?.tasks) return null;
  const taskList = props.state.user.tasks;

  const [showAddTask, setShowAddTask] = useState(false);

  // const [state, dispatch] = useReducer(reducerT, initialStateT);

  console.log(props.state);

  return (
    <>
      <div className="toDo_container">
        <h2 className="toDo_title">Zadania</h2>
        <div className="tasks">
          {taskList?.map((task) => {
            return <Task taskInfo={task} key={task.title} />;
          })}
          <button onClick={() => setShowAddTask(true)} className="addTaskBtn">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      {showAddTask ? (
        <AddTask dispatch={props.dispatch} handleClose={setShowAddTask} />
      ) : null}
    </>
  );
}

export default ToDo;
