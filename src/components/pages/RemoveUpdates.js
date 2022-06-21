import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseURL = "/api";

class RemoveUpdates extends React.Component {
  state = {
    noti: "",
    update: [],
  };

  componentDidMount = () => {
    this.loadData();
  };
  deleteUpdate = (id) => {
    console.log(`deleting ${id}`);
    const deleted = axios
      .post(`${baseURL}/deleteUpdate`, { id: id })
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
    const getUpdates = axios.get(`${baseURL}/getUpdate`);
    getUpdates
      .then((data) => {
        // console.log(data);
        this.setState({ update: data.data["updateList"] });
        // setcourse(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  displayUpdate = (update) => {
    console.log(update.length);
    if (!update.length) return null;

    return update.map((item) => {
      console.log(`returning ${item.noti}`);
      return (
        <div class="card text-center col-sm-8 border-0">
          <div class="card-body border-0" id={item._id}>
            <h3 class="card-title">{item.noti}</h3>
            <button
              onClick={this.deleteUpdate.bind(this, item._id)}
              id={item._id}
              class="btn-add-cource0"
              style={{ paddingRight: `1em`, paddingLeft: `1em` }}
            >
              Delete
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
              Here is the UPSC Updates available
            </h4>
          </nav>
        </header>
        <div className="container text-center">
          <h2></h2>
          {console.log(this.state)}
          <div className="row">{this.displayUpdate(this.state.update)}</div>
        </div>
      </div>
    );
  }
}

export default RemoveUpdates;
