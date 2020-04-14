import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class AppRouter extends React.Component {
  render() {
    return (
        <Router>
          <div className="app">
            <nav className="main-nav">
              <Link to="/">Home</Link>
              <Link to="/">Login</Link>
              <Link to="/">Register</Link>
            </nav>
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/" exact component={Login} />
              <Route path="/" exact component={Register} />
            </Switch>
          </div>
        </Router>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
