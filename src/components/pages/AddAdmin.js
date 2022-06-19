import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { registerAction } from "../../container/actions";
//import BaseLogin from "../imports/BaseLogin";
import AddAdminForm from "../imports/AddAdminForm";
import { Link } from "react-router-dom";
import { addAdminAction } from "../../container/actions";
import { useHistory } from "react-router-dom";

export default function AddAdmin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  // on form submit click handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    const addAdmin = dispatch(addAdminAction(newUser));
    addAdmin
      .then((data) => setError("Successfully added " + newUser.username))
      .catch((error) => setError(error.err));
    // const validate = dispatch(registerAction(newUser));
    // validate
    //   .then((data) => {
    //     history.push("/login");
    //   })
    //   .catch((error) => setError(error.data.err));
  };

  let registerData = {
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    errorMessage,
    setError,
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
          <Link className="nav-link brand " to="/AdminDashboard">
            <i className="fa-solid fa-square-caret-left text-white"></i>
          </Link>
          <h4 className="text-white mx-auto">Add Admin</h4>
        </nav>
      </header>
      <div id="login">
        <div className="container">
          <div className="row login-box">
            <AddAdminForm registerState={registerData} />
          </div>
        </div>
      </div>
    </div>
  );
}
