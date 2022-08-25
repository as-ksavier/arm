import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "./utils";

//Tasks
// * The Login button onClick should trigger the login() function
// * Disable the login button when email is empty or Password is less than 5 characters
// * Disable the login button while login action is being performed
// * Show the error message in placeholder
// * If the login() function returns successfully then do the following:
//   * Trigger the onLogin event handler property with the resolved object as an argment
//   * Redirect to the HomePage "/"

const LoginForm = function (props) {
  return (
    <>
      <div className="row">
        <label htmlFor={"email"}>Email </label>
        <input type={"email"} />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password </label>
        <input type={"password"} />
      </div>
      <div className="errorMessage">{/*Place error message here */}</div>
      <button onClick={() => {}}>Login</button>
    </>
  );
};
export default LoginForm;
