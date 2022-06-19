import React from "react";

import { Link } from "react-router-dom";

import axios from "axios";
const baseURL = "http://localhost:4000/api";

class RemoveQuestion extends React.Component {
  state = {
    title: "",
    desc: "",
    question: [],
  };

  componentDidMount = () => {
    this.loadData();
  };

  deleteQuestion = (id) => {
    console.log(`deleting ${id}`);
    const deleted = axios
      .post(`${baseURL}/deleteQuestion`, { id: id })
      .then((data) => {
        console.log(data.status);
        if (data.status == 202) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
      console.log(`returning ${item._id}`);
      return (
        <div class="card text-center col-sm-3 border-0">
          <div class="card-body border-0" id={item._id}>
            <h3 class="card-title">{item.title}</h3>
            <p class="card-text">{item.description}</p>
          </div>
          <div className="card-footer border-0">
            <button
              onClick={this.deleteQuestion.bind(this, item._id)}
              id={item._id}
              className="btn-add-cource"
            >
              Delete Question Paper
            </button>
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
            <Link className="nav-link brand " to="/AdminDashboard">
              <i className="fa-solid fa-square-caret-left text-white"></i>
            </Link>
            <h4 className="text-white mx-auto">
              Here is the Question Paper's available
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

export default RemoveQuestion;
