import React from "react";
import ErrorAlert from "./ErrorAlter";

export default function AddAdminFormForm(props) {
  let {
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    errorMessage,
    setError,
  } = props.registerState;

  return (
    <div className="col-sm-7 bg-color align-self-center">
      <div className="form-section ">
        <div className="title">
          <h3>Create a new account</h3>
        </div>
        <div className="login-inner-form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-group form-box">
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="input-text"
                placeholder="Username"
              />
              <i className="icon user"></i>
            </div>

            <div className="form-group form-box">
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input-text"
                placeholder="Email"
              />
              <i className="icon email"></i>
            </div>
            <div className="form-group form-box">
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-text"
                placeholder="Password"
              />
              <i className="icon lock"></i>
            </div>
            {errorMessage && (
              <ErrorAlert
                errorMessage={errorMessage}
                clearError={() => setError(undefined)}
              ></ErrorAlert>
            )}

            <div className="form-group">
              <button className="btn primary-btn">Add Admin</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
