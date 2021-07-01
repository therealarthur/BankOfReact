import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import Nav from './components/Nav';
import axios from 'axios';
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
      },
      updateState: (props)=>{this.state = props}
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
    this.DebitRecord()
    //make sure data is available on load
    this.props.getCreditsThunk().then(() => {
      this.setState({ credits: this.props.credits['credits'] })
    }).then(() => {
      for (let x in this.state.credits) {
        let credit = this.state.credits[x]['amount']
        let myCreditProp = {
          amt: credit,
          description: ''
        }
        this.addCredit(myCreditProp)
      }
    })
  }
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  DebitRecord = async () => {
    let linkToAPI = 'https://moj-api.herokuapp.com/debits'
    try {
      let response = await axios.get(linkToAPI);
      this.setState({
        debits: response.data,

      });
      let data = this.state.debits;
      let debittotal = 0
      data.map((debits) => {
        debittotal = debittotal + debits.amount
      })
      debittotal = Number(debittotal).toFixed(2)
      let amountafterDebit = Number(this.state.accountBalance - debittotal).toFixed(2)
      this.setState({
        debitBalance: debittotal,
        accountBalance: this.state.accountBalance - debittotal,
      })


    }
    catch (error) {
      if (error.response) {
        console.log(error.response.data); //Not Found
        console.log(error.response.status); //404

      }
    }
  }

  updateState = (props) => { // This is lazy solution to maintaining state
    console.log("MYPROPS",props)
    this.state.accountBalance = props.accountBalance;
    this.state.creditBalance = props.creditBalance;
    this.state.credits = props.credits;
  }

  addCredit = (props) =>{
    if(props.description === ''){

      this.setState({
        accountBalance: this.state.accountBalance + props.amt,
        creditBalance: this.state.creditBalance + props.amt
      })
    }else{
      console.log("handlin it", props)
      let myNewCredits = this.state.credits;
      myNewCredits.push(props)
      this.setState({
        accountBalance: this.state.accountBalance + props.amt,
        creditBalance: this.state.creditBalance + props.amt,
        credits: myNewCredits
      })
      console.log("HANDLED IT", this.state)
    }
  }

  addDebit = (newDebit) => {
    let fix = this.state.accountBalance - Number(newDebit.amount)
    let deb = Number(newDebit.amount)
    fix = Number(fix).toFixed(2)
    this.setState({
      accountBalance: fix,    //this.state.accountBalance - newDebit.amount,
      debitBalance: Number(this.state.debitBalance + deb)
    })
    let debit = this.state.debits
    debit.push(
      newDebit
    )
  }

  render() {
    console.log(this.state)

    const HomeComponent = () => (<Home { ...this.state} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits accountBalance={this.state.accountBalance} credits={this.state.credits} creditBalance={this.state.creditBalance} updateState={this.updateState} />)
    const DebitsComponent = () => (<Debits accountBalance={this.state.accountBalance} debits={this.state.debits} addDebit={this.addDebit} />)
    return (
      <Router>
        <div>
        <Nav />
        <Switch>
        <Route exact path="/" render={HomeComponent} />
        <Route exact path="/userProfile" render={UserProfileComponent} />
        <Route exact path="/Login" render={LogInComponent} /> 
        <Route exact path="/Credits" render={CreditsComponent} />
        <Route exact path="/Debits" render={DebitsComponent} />
        </Switch>
        </div>
      </Router>

    );
  }
}

function addCredit() {
  // addcredit
}

function mapDispatch(dispatch) {
  return {
    getCreditsThunk: () => dispatch(getCreditsThunk())
  }
}

function mapState(state) {
  return {
    credits: state.credits
  }
}

export default connect(mapState, mapDispatch)(App);
