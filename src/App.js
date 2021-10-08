
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
