import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <Router>
        <Switch>
          <Route 
            exact
            path="/"
            render={(routeProps) => (
            <HomePage />
            )}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;