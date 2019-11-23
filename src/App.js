import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Events from './Events';
import Discussions from './Discussions';
import Fundraising from './Fundraising';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'discussion'
    }
    this.pageChange = this.pageChange.bind(this);
  }
  pageChange(newPage) {
    this.setState({page: newPage});
  }
  render(routeProps) {

    return (
      <Router>
        <Switch>
          <Route 
            exact
            path="/"
            render={(routeProps) => (
              <NavBar {...routeProps} pageChange={this.pageChange}>
              <HomePage />
              </NavBar>
            )}
          />
          <Route 
            exact
            path="/discussion"
            render={(routeProps) => (
              <NavBar {...routeProps} pageChange={this.pageChange}>
              <Discussions />
              </NavBar> 
            )}
          />
          <Route 
            exact
            path="/events"
            render={(routeProps) => (
              <NavBar {...routeProps} pageChange={this.pageChange}> 
              <Events />
              </NavBar> 
            )}
          />
          <Route 
            exact
            path="/fundraising"
            render={(routeProps) => (
              <NavBar {...routeProps} pageChange={this.pageChange}>
              <Fundraising />
              </NavBar>
            )}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;