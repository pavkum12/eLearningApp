import React from "react";

import { Link } from "react-router-dom";

import axios from "axios";
const baseURL = "http://localhost:4000/api";

class Question extends React.Component {
  state = {
    title: "",
    desc: "",
    question: [],
  };

  componentDidMount = () => {
    this.loadData();
  };

  loadData = async () => {
    const getQuestion = axios.get(`${baseURL}/getQuestion`);
    getQuestion
      .then((data) => {
        // console.log(data);
        this.setState({ question: data.data["questionList"] });
        // setcourse(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  displayQuestion = (question) => {
    console.log(question.length);
    if (!question.length) return null;

    return question.map((item) => {
      console.log(`returning ${item.title}`);
      return (
        <div class="card text-center col-sm-3 border-0">
          <div class="card-body border-0" id={item._id}>
            <h3 class="card-title">{item.title}</h3>
            <p class="card-text">{item.description}</p>
          </div>
          <div className="card-footer border-0">
            <a href={`${item.fileUrl}`} class="btn-add-cource0">
              View Question Paper
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
            <Link className="nav-link brand " to="/">
              <i className="fa-solid fa-square-caret-left text-white"></i>
            </Link>
            <h4 className="text-white mx-auto">
              Here is the question papers available
            </h4>
          </nav>
        </header>
        {/* <CourseList courses={course} /> */}

        <div className="container text-center">
          <h2></h2>
          {console.log(this.state)}
          <div className="row">{this.displayQuestion(this.state.question)}</div>
        </div>
      </div>
    );
  }
}

export default Question;
