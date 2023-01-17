import "./App.css";
import { reducer, initialState } from "./helpers";
import React, { useReducer } from "react";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import ToDo from "./components/toDo/ToDo";
import LoginPage from "./components/LoginPage/LoginPage";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/stronaGlowna"
          element={
            <>
              <Menu /> <Home dispatch={dispatch} state={state} />
            </>
          }
        />
        <Route
          path="/planZadan"
          element={
            <>
              <Menu /> <ToDo dispatch={dispatch} state={state} />{" "}
            </>
          }
        />
        <Route path="/budzet" element={<LoginPage dispatch={dispatch} />} />
        <Route path="/goscie" element={<LoginPage dispatch={dispatch} />} />
        <Route path="/" element={<LoginPage dispatch={dispatch} />} />
      </Routes>
    </div>
  );
}

export default App;
