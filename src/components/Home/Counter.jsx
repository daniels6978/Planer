import { useEffect, useState } from "react";
import AddCar from "./AddCar";
import "./styleHome.css";

const Counter = (props) => {
  // let day_to = props.day_to
  let name_groom = "Daniel";
  let name_birde = "Karolina";
  let toDo = "10%";
  let money = "30%";
  let guests = "100";

  const [day_to, setDay_to] = useState();
  setDay_to(props.day_to);

  return (
    <>
      <div className="dashboard__counter">
        <div className="dashboard__counter--img">
          <p className="dashboard__counter--names dashboard__counter--birde">
            {name_birde}
          </p>
          <p className="dashboard__counter--names dashboard__counter--groom">
            {name_groom}
          </p>
          <p className="dashboard__counter--day">{day_to}</p>
        </div>
      </div>

      <div className="dashboard__pointers">
        <div className="dashboard__pointers--div dashboard__pointers--toDo ">
          <p className="dashboard__pointers--text">Postęp przygotowań</p>
          <div className="hidden__div"></div>
          <p className="hidden__text">{props.}</p>
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
};

export default Counter;
