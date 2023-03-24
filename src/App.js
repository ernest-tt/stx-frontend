import LoginPage from "./pages/Login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import authService from "./services/AuthService";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const isAuthenticated = authService.isAuthenticated(); // Replace with actual authentication check
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <PrivateRoute path ="/dashboard" component={Dashboard} isAuthenticated={authService.isAuthenticated()} />
          <Route exact path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated ? <Component {...props} />
    : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
  );
}

export default App;
