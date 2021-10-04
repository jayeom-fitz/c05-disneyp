import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
