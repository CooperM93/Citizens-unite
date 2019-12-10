 import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import seedCards from './seedCards';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import HomePage from './HomePage';
import Events from './Events';
import Discussions from './Discussions';
import Fundraising from './Fundraising';

/*
TODO: 
  create state for different types of cards
  interface with server (backend)
  fix the page state for homepage

ColorScheme = Flat UI Colors American 
  grays: { 
    Dracula Orchid 100: RGB(204,206,206) #cccece,
    Dracula Orchid 200: RGB(155,158,159) #9b9e9f,
    Dracula Orchid 700: RGB(24,27,28) #181b1c,
  }
  reds: {
    Chi-Gong 500: RGB(205,43,44) #cd2b2c
  },
  orange: {
    Orangeville 500: RGB(216,105,78), #d8694e
  }
  purple: {
    Shymoment 500: RGB(92,91,182), #5c5bb6
  }
*/
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: this.props.location.pathname.slice(1)
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
              <NavBar {...routeProps} pageChange={this.pageChange} page={this.state.page}>
              <HomePage />
              </NavBar>
            )}
          />
          <Route 
            exact
            path="/discussion"
            render={(routeProps) => (
              <NavBar {...routeProps} pageChange={this.pageChange} page={this.state.page}>
              <Discussions seedCards={seedCards}/>
              </NavBar> 
            )}
          />
          <Route 
            exact
            path="/events"
            render={(routeProps) => (
              <NavBar {...routeProps} pageChange={this.pageChange} page={this.state.page}> 
              <Events seedCards={seedCards}/>
              </NavBar> 
            )}
          />
          <Route 
            exact
            path="/fundraising"
            render={(routeProps) => (
              <NavBar {...routeProps} pageChange={this.pageChange} page={this.state.page}>
              <Fundraising seedCards={seedCards}/>
              </NavBar>
            )}
          />
        </Switch>
      </Router>
    )
  }
}

export default withRouter(App);