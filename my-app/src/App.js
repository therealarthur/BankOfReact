import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';

import { connect } from 'react-redux'
import { getCreditsThunk } from './actions'
import { useSelector } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      creditBalance: 0,
      debitBalance: 0,
      credits: [],
      debits: [],
      currentUser: {
        userName: 'joe_mama',
        memberSince: '07/23/96',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  // REDUX STUFF
  componentDidMount() {
    //make sure data is available on load
    this.props.getCreditsThunk().then(()=>{
      this.setState({credits: this.props.credits['credits']})
    }).then(()=> {
      for(let x in this.state.credits){
        let credit = this.state.credits[x]['amount']
        this.addCredit(credit)
      }
    })
  }
  ///////////////////////////////////////////
  ///////////////////////////////////////////

  addCredit = (credit) =>{
    this.setState({accountBalance: this.state.accountBalance + credit})
  }
  
  render() {
    // console.log("App.js", this.state);

    console.log("IN RENDER", this.state)

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} creditBalance={this.state.creditBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/Login" render={LogInComponent} />
        </div>
      </Router>

    );
  }
}

function addCredit(){
// addcredit
}

function addDebit(){
// adddebit
}

function mapDispatch(dispatch) {
  return { 
    getCreditsThunk: () => dispatch(getCreditsThunk()) 
  }
}

function mapState(state) {
  // console.log("HUH",state);
  return {
    credits: state.credits
  }
}

export default connect(mapState, mapDispatch)(App);
