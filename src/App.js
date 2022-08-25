import React from "react";
import "./styles.css";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//Tasks
// 1 Complete tasks for the LoginForm Component (LoginForm.js)
// 2 The LoginForm onLogin event handler property should trigger the following:
//   * Disable the redirect from "/" to "/login"
//   * Update the HomePage userDetails property with the argument passed by the event handler
// 3 Complete tasks for the HomePage Component (HomePage.js)

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Switch>
          <Route path="/login">
            <LoginForm onLogin="" />
          </Route>
          <Route path="/">
            {true ? <Redirect to="/login" /> : <HomePage userDetails="" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
