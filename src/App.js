import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginPage/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './Components/RegistrationPage/Register';
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/Login" component={Login}></Route>
    </Switch>
    <Switch>
    <Route path="/Registration" component={Register}></Route>
    </Switch>
    </Router>
  );
}

export default App;
