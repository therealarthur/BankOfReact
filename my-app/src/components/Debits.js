import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Debits extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                theamount: '',
                theDesc: '',

            }

            this.handleChangeAmount = this.handleChangeAmount.bind(this);
            this.handleChangeDescription = this.handleChangeDescription.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    }





    handleChangeAmount(event) {

        let input = event.target.value;
        if ((isNaN(input))) {
            alert("Please Input a Number")
        }


        else {
            this.setState({

                theamount: input,



            })
        }


    }
    handleChangeDescription(event) {

        this.setState({

            theDesc: event.target.value,


        })

    }
    handleSubmit(event) {
        event.preventDefault();
        let date = Date().toLocaleString()
        let fixer = Number(this.state.theamount).toFixed(2)
        let addedData = {
            amount: fixer,
            description: this.state.theDesc,
            date: date,
        }
        this.props.addDebit(addedData);

    }



    render() {

        return (
            <div>
                <div>
                    <h1>Debits</h1>
                </div>
                <div>
                    <ul>
                        {
                            this.props.debits.map((debits, index) => {
                                return (
                                    <li key={index}>Amount: {debits.amount} &nbsp;&nbsp;&nbsp; Description: {debits.description} &nbsp;&nbsp; &nbsp; Date: {debits.date}</li>
                                )
                            })
                        }

                    </ul>

                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        &nbsp;&nbsp;Amount:&nbsp;&nbsp;
                        <input type="text" id="Amount" name='amount' value={this.state.theamount} onChange={this.handleChangeAmount} />
                        &nbsp;&nbsp; Description:&nbsp;&nbsp;
                        <input type="text" id="Description" name='description' value={this.state.theDesc} onChange={this.handleChangeDescription} />&nbsp;&nbsp;
                        <input type="submit" value="Submit" />
                    </form>

                </div>
                <Link to="/">Home</Link>
                <AccountBalance accountBalance={this.props.accountBalance} />
            </div >
        );
    }
}

export default Debits