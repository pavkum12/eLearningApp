import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addQuestionAction } from "../../container/actions";
import { Link } from "react-router-dom";

import AdminAddQuestion from "../imports/AdminAddQuestion";
import axios from "axios";

export default function AddQuestion() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let fileUrl = "";
    const formData = new FormData();
    const fileData = new FormData();
    fileData.append("file", file);
    fileData.append("upload_preset", "ws6pekcs");
    axios
      .post("https://api.cloudinary.com/v1_1/sjbit/upload", fileData)
      .then((response) => {
        fileUrl = response["data"].secure_url;

        const questionDetail = {
          title,
          description,
          fileUrl,
        };

        const addAction = dispatch(addQuestionAction(questionDetail));

        addAction
          .then((data) => {
            alert(
              "course title:" + title + '" Description:"' + description + '"'
            );
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
          <Link className="nav-link brand " to="/AdminDashboard">
            <i className="fa-solid fa-square-caret-left text-white"></i>
          </Link>
          <h4 className="text-white mx-auto">Add Question Papers</h4>
        </nav>
      </header>
      <AdminAddQuestion
        courseContent={{
          handleSubmit,
          setTitle,
          setDescription,
          setFile,
        }}
      />
    </div>
  );
}
