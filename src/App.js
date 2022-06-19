import "./App.scss";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Course from "./components/pages/Course";
import RemoveCourse from "./components/pages/RemoveCourse";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Update from "./components/pages/Update";
import Admin from "./components/pages/Admin";
import AdminDashboard from "./components/pages/AdminDashboard";
import AddCourse from "./components/pages/AddCourse";
import AddAdmin from "./components/pages/AddAdmin";
import AddUpdates from "./components/pages/AddUpdates";
import RemoveUpdates from "./components/pages/RemoveUpdates";
import Question from "./components/pages/Question";
import AddQuestion from "./components/pages/AddQuestion";
import RemoveQuestion from "./components/pages/RemoveQuestion";
import GlobalStyle from "./globalStyles";
import React from "react";
//pages
import Home0 from "./pages/Home0";
// import SignUp from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/Home" component={Home}></Route>
        <Route exact path="/" component={Home0}></Route>
        <Route path="/Course" component={Course}></Route>
        <Route path="/RemoveCourse" component={RemoveCourse}></Route>
        <Route path="/News" component={News}></Route>
        <Route path="/Update" component={Update}></Route>
        <Route path="/RemoveUpdates" component={RemoveUpdates}></Route>
        <Route path="/admindashboard" component={AdminDashboard}></Route>
        <Route path="/AddCourse" component={AddCourse}></Route>
        <Route path="/AddAdmin" component={AddAdmin}></Route>
        <Route path="/AddUpdates" component={AddUpdates}></Route>
        <Route path="/Question" component={Question}></Route>
        <Route path="/AddQuestion" component={AddQuestion}></Route>
        <Route path="/RemoveQuestion" component={RemoveQuestion}></Route>
        <Route path="/Home" exact component={Home} />
        {/* <Route path="/signup" exact component={SignUp} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
