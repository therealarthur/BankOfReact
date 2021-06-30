import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import CreditBalance from './CreditBalance';
import Credits from './Credits';
import Debits from './Debits'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        // console.log(this.state)
        // console.log(this.props)
        this.state = this.props
    }
    render() {
        // console.log("in Home State", this.state)
        // console.log("in Home props", this.props)
        return (
            <div>
                <img src="https://4.bp.blogspot.com/-FK-P2mRfa-4/XD_90ZtpboI/AAAAAAAARmk/irYwY0lZXYQkfJehcZbWUy8UgQh6Q90-wCLcBGAs/s1600/Bank%2BBPD%2BBali.png" alt="bank" height="200px" />
                <h1>Bank of React</h1>

                <Link to="/userProfile">User Profile</Link>
                <Link to="/Debits">Debit</Link>
                <AccountBalance accountBalance={Number(this.props.accountBalance).toFixed(2)} />
                <Link to={{pathname: "/Credits"}}>Account Credits</Link>
                {/* <CreditBalance creditBalance={this.props.creditBalance} /> */}
            </div>
        );
    }
}

export default Home;