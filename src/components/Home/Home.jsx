import React, { useReducer, useState } from "react";
import "./styleHome.css";

function Home(props) {
  let money = "30%";
  let guests = "100";

  return (
    <>
      <div className="dashboard__counter">
        <div className="dashboard__counter--img">
          <p className="dashboard__counter--names dashboard__counter--birde">
            {props.state.user.user.bride}
          </p>
          <p className="dashboard__counter--names dashboard__counter--groom">
            {props.state.user.user.groom}
          </p>
          <p className="dashboard__counter--day">
            {props.state.user.user.dayTo}
          </p>
        </div>
      </div>

      <div className="dashboard__pointers">
        <div className="dashboard__pointers--div dashboard__pointers--toDo ">
          <p className="dashboard__pointers--text">Postęp przygotowań</p>
          <div className="hidden__div"></div>
          <p className="hidden__text">{props.state.user.pctComplet + "%"}</p>
        </div>
        <div className="dashboard__pointers--div dashboard__pointers--money">
          <p className="dashboard__pointers--text">Wykorzystanie budżetu</p>
          <div className="hidden__div"></div>
          <p className="hidden__text">{money}</p>
        </div>
        <div className="dashboard__pointers--div dashboard__pointers--guests">
          <p className="dashboard__pointers--text">Potwierdzeni goście</p>
          <div className="hidden__div"></div>
          <p className="hidden__text">{guests}</p>
        </div>
      </div>
    </>
  );
}
export default Home;
