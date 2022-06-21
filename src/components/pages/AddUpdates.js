import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addUpdateAction } from "../../container/actions";
import { Link } from "react-router-dom";
import AdminAddUpdate from "../imports/AdminAddUpdate";

export default function AddUpdates() {
  const [noti, setnoti] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const updateContent = {
      noti,
    };
    const addAction = dispatch(addUpdateAction(updateContent));

    addAction
      .then((data) => {
        // alert('course title:' + title + '" Description:"' + description + '" Category :"' + category + '"');
        console.log(data);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
          <Link className="nav-link brand " to="/AdminDashboard">
            <i className="fa-solid fa-square-caret-left text-white"></i>
          </Link>
          <h4 className="text-white mx-auto">Update</h4>
        </nav>
      </header>
      <AdminAddUpdate updateContent={{ handleSubmit, setnoti }} />
    </div>
  );
}
