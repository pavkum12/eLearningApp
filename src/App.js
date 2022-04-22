import './App.scss';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Course from './components/pages/Course';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Updates from './components/pages/Updates';
import Admin from './components/pages/Admin';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} ></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Course" component={Course} ></Route>
        <Route path="/News" component={News} ></Route>
        <Route path="/Updates" component={Updates} ></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
