import './App.css';
import { reducer, initialState } from './helpers';
import React, {Switch, useReducer, useState, useEffect } from 'react'
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import ToDo from './components/toDo/ToDo';
import LoginPage from './components/LoginPage/LoginPage';
import { Route, Routes, useLocation } from 'react-router-dom';


function App() {

  let component;
  let menu;

  const [state, dispatch] = useReducer(reducer, initialState);


  

  // switch (window.location.pathname) {
  //   case "/stronaGlowna":
  //     component = <Home dispatch = {dispatch} state = {state}/>;
  //     menu = true;
  //     break;
  //   case "/planZadan":
  //     component = <ToDo dispatch = {dispatch} state = {state}/>;
  //     menu = true;
  //     break;
  //   case "/":
  //     component = <LoginPage dispatch = {dispatch}/>;
  //     menu = false;
  //     break
  //   default:
  //     return 0;    
        
  const location = useLocation()

  return ( 
    <div className="App">
      
            <Switch location = {location} key = {location.pathname} >
              <Route path='/stronaGlowna' component = {Home}/>
              <Route path='/planZadan' component = {ToDo}/>
              <Route path='/' component = {LoginPage}/>
            </Switch>
    
    </div>
    
  );
}

export default App;