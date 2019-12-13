 import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import seedCards from './seedCards';
import NavBar from './NavBar';
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
  },
  reds: {
    Chi-Gong 100: rgb(255,212,205) #ffd4cd,
    Chi-Gong 300: rgb(238,126,112) #ee7e70,
    Chi-Gong 500: RGB(205,43,44) #cd2b2c,
    Chi-Gong 400: rgba(135,0,0,1) #df4e45,
    Chi-Gong 900: rgba(223,78,69,1) #870000,
    'linear-gradient(208deg, rgba(135,0,0,1) 0%, rgba(223,78,69,1) 100%)'
  },
  orange: {
    Orangeville 100: rgb(254,223,215) #fedfd7,
    Orangeville 300: rgb(242,160,139) #f2a08b,
    Orangeville 500: RGB(216,105,78) #d8694e,
    Orangeville 400: RGB(231, 128, 103) #e78067,
    Orangeville 900: RGB(129, 47, 27) #952f1b,
  },
  purple: {
    Shymoment 500: RGB(92, 91, 182) #5c5bb6,
    Shymoment 100: rgb(236,232,255) #ece8ff,
    Shymoment 300: rgb(196,187,255) #c4bbff,
    Shymoment 400: RGB(174, 166, 254) #aea6fe,
    Shymoment 900: RGB( 92, 91, 181) #5c5bb6,
  },
  green: {
    Mintleaf 500: rgb(0,176,141) #00b08d,
    Mintleaf 100: rgb(213,240,230) #d5f0e6,
    Mintleaf 300: rgb(123,209,182) #7bd1b6,
    Mintleaf 400: rgb(66,192,159) #42c09f,
    Mintleaf 900: rgb(0,116,85) #007455,
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <HomePage {...routeProps} pageChange={this.pageChange}/>
              </NavBar>
            )}
          />
          <Route 
            exact
            path="/discussions"
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