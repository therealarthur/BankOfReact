import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import '../css/Debits.css';

class Debits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theamount: '',
            theDesc: '',

        }

        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }





    handleChangeAmount(event) {         //handle change for amount input

        let input = event.target.value;         //store value into input
        if ((isNaN(input))) {                   //if the input is not a number alert user
            alert("Please Input a Number")
        }


        else {
            this.setState({

                theamount: input,           //set the state



            })
        }


    }
    handleChangeDescription(event) {        //handle change for description input


        this.setState({

            theDesc: event.target.value,        //set the state


        })

    }
    handleSubmit(event) {                               //once input button is pressed
        event.preventDefault();                         //make sure page doesnt refresh
        let date = Date().toLocaleString()                  //get the current date and tiem
        let fixer = Number(this.state.theamount).toFixed(2)     //set the amount to 2 decimal       
        let addedData = {                               //create an object
            amount: fixer,
            description: this.state.theDesc,
            date: date,
        }
        this.props.addDebit(addedData);             //make the object the paramenter

    }

    TableHeader = () => {
        let header = ["#", "AMOUNT", "DESCRIPTION", "DATE"];
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }


    TableData = () => {
        return this.props.debits.map((debits, index) => {
            return (
                //  <li key={index}>Amount: {debits.amount} &nbsp;&nbsp;&nbsp; Description: {debits.description} &nbsp;&nbsp; &nbsp; Date: {debits.date}</li>
                <tr key={index}>
                    <td>{index}</td>
                    <td>{debits.amount}</td>
                    <td>{debits.description}</td>
                    <td>{debits.date}</td>
                </tr>
            )
        })
    }


    render() {

        return (
            <div>
                <div>
                    <h1>Debits</h1>
                </div>
                <div>
                    <Link to="/">Back to Home</Link>
                    <AccountBalance accountBalance={Number(Number(this.props.accountBalance).toFixed(2))} />
                    <form onSubmit={this.handleSubmit}>
                        &nbsp;&nbsp;<strong>Amount:</strong>&nbsp;&nbsp;
                        <input type="text" id="Amount" name='amount' value={this.state.theamount} onChange={this.handleChangeAmount} />
                        &nbsp;&nbsp;<strong>Description:</strong>&nbsp;&nbsp;
                        <input type="text" id="Description" name='description' value={this.state.theDesc} onChange={this.handleChangeDescription} />&nbsp;&nbsp;
                        <input className="buttn" type="submit" value="Submit" />
                    </form>

                </div>
                <div>
                    <table id='debits_table'>
                        <thead>
                            <tr>{this.TableHeader()}</tr>
                        </thead>
                        <tbody>
                            {this.TableData()}
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}

export default Debits