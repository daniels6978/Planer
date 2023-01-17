import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styleLoginPage.css";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [groom, setGroom] = useState("");
  const [bride, setBride] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showParagraph, setShowParagraph] = useState("");
  const [messageContent, setmessageContent] = useState("Błąd");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userName !== "" && password !== "") {
      const payLoad = {
        userName,
        password,
      };

      const response = await fetch(
        "http://localhost:8080/planerWeselny/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payLoad),
        }
      );
      const data = await response.json();
      window.localStorage.setItem("userId", data.user.id);
      props.dispatch({ type: "updateData", payload: data });

      if (data.marker) {
        navigate("/stronaGlowna");
      } else {
        setmessageContent("Błedne hasło lub login!");
        setShowParagraph("showLoginMessage");
      }
    } else {
      setmessageContent("Uzupełnij wszystkie pola!");
      setShowParagraph("showLoginMessage");
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (
      userName !== "" &&
      password !== "" &&
      groom !== "" &&
      bride !== "" &&
      weddingDate !== ""
    ) {
      const payLoad = {
        userName,
        password,
        groom,
        bride,
        weddingDate,
      };

      const response = await fetch(
        "http://localhost:8080/planerWeselny/addUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payLoad),
        }
      );

      const data = await response.json();

      if (data) {
        // navigate("/stronaGlowna");
        setIsLogin(true);
      } else {
        setmessageContent("Nazwa użytkowinka już istneje");
        setShowParagraph("showLoginMessage");
      }
    } else {
      setmessageContent("Uzupełnij wszystkie pola!");
      setShowParagraph("showLoginMessage");
    }
  };

  return (
    <div className="container">
      <div className="boxForm">
        <div className="left">
          <div className="overlay">
            <h1>Witaj!</h1>
            <p>
              Zaplanuj swoje wymarzone wesele. Stwórz listę zadań, listę gości
              oraz zarządzaj swoim budżetem. Zadbaj o każdy szczegół.{" "}
            </p>
            <span>
              <p>Zalguj się przez social media</p>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i> Login with
                Twitter
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          {isLogin ? (
            <form onSubmit={(e) => handleLogin(e)}>
              <h3>Zaloguj się</h3>
              <p>Nie masz konta? Utwórz konto, zajmie Ci to minutę</p>
              <div className="imputs">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="username"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                />
              </div>
              <p className={`loginMessage ${showParagraph}`}>
                {messageContent}
              </p>
              <button onClick={() => setIsLogin(false)}>Utwórz konto</button>
              <button className="left-btn" type="submit">
                Zaloguj
              </button>
            </form>
          ) : (
            <form onSubmit={(e) => handleRegistration(e)}>
              <h3>Rejestracja</h3>
              <div className="imputs">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="nazwa użytkownika"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="hasło"
                />
                <input
                  onChange={(e) => setGroom(e.target.value)}
                  type="text"
                  placeholder="imię pana młodego"
                />
                <input
                  onChange={(e) => setBride(e.target.value)}
                  type="text"
                  placeholder="imię pani młodej"
                />
                <input
                  onChange={(e) => setWeddingDate(e.target.value)}
                  type="date"
                  placeholder="data wesela"
                />
              </div>
              <p className={`loginMessage ${showParagraph}`}>
                {messageContent}
              </p>
              <button type="submit">Utwórz konto</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
