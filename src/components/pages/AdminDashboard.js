import React, { useEffect } from "react";

import Header from "../imports/Header";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function AdminDashboard() {
  const user = useSelector((state) => state.isLoggedIn);
  const history = useHistory();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (!route()) {
      history.push("/login");
    }
  }, [route, history]);

  return (
    <>
      <Header></Header>
      <main>
        <div className="container text-center main-menu">
          <Link className="nav-brand" to="/AddCourse">
            <button className="menu-button" id="add-cource">
              Add Courses
            </button>
          </Link>
          <Link className="nav-brand" to="/RemoveCourse">
            <button className="menu-button" id="add-cource">
              Remove Courses
            </button>
          </Link>
          <Link className="nav-brand" to="/AddQuestion">
            <button className="menu-button" id="add-question">
              Add Question Paper
            </button>
          </Link>
          <Link className="nav-brand" to="/RemoveQuestion">
            <button className="menu-button" id="add-question">
              Remove Question Paper
            </button>
          </Link>
          <Link className="nav-brand" to="/AddUpdates">
            <button className="menu-button" id="update">
              Add Updates
            </button>
          </Link>
          <Link className="nav-brand" to="/RemoveUpdates">
            <button className="menu-button" id="update">
              Remove Updates
            </button>
          </Link>
          <Link className="nav-brand" to="/AddAdmin">
            <button className="menu-button" id="add-admin">
              Add Admin
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
