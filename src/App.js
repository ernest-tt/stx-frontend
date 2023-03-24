import LoginPage from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route path ="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
