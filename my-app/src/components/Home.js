import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import CreditBalance from './CreditBalance';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://4.bp.blogspot.com/-FK-P2mRfa-4/XD_90ZtpboI/AAAAAAAARmk/irYwY0lZXYQkfJehcZbWUy8UgQh6Q90-wCLcBGAs/s1600/Bank%2BBPD%2BBali.png" alt="bank" height="200px" />
                <h1>Bank of React</h1>

                <Link to="/userProfile">User Profile</Link>
                <AccountBalance accountBalance={this.props.accountBalance} />
                <CreditBalance creditBalance={this.props.creditBalance} />
            </div>
        );
    }
}

export default Home;