import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Login from "./components/Login";
import Home from "components/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
