import React, { Component } from 'react';

class CreditBalance extends Component {
    render() {
        return (
            <div>
                Credit Balance: {this.props.creditBalance}
            </div>
        );
    }
}

export default CreditBalance