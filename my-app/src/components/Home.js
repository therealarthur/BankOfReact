import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import CreditBalance from './CreditBalance';
import Credits from './Credits';
import Debits from './Debits'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/Home.css';

class Home extends Component {
    render() {
        console.log("in Home State", this.state)
        console.log("in Home props", this.props)
        const CreditsComponent = () => (<Credits {...this.state} />)
        return (
            <div>
                <img className = "Image" src="https://4.bp.blogspot.com/-FK-P2mRfa-4/XD_90ZtpboI/AAAAAAAARmk/irYwY0lZXYQkfJehcZbWUy8UgQh6Q90-wCLcBGAs/s1600/Bank%2BBPD%2BBali.png" alt="bank" height="200px" />
                <h1>Bank of React</h1>

                <Link to="/userProfile">User Profile</Link>
                {/* <Link to="/Debits">Debit</Link> */}
                <AccountBalance accountBalance={this.props.accountBalance} />
                {/* <Link to={{ pathname: "/Credits", state: { isworking: true } }}>Account Credits</Link> */}
                {/* <CreditBalance creditBalance={this.props.creditBalance} /> */}
            </div>
        );
    }
}

export default Home;