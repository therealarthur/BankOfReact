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

    TableHeader = () => {
        let header = ["#","AMOUNT","DESCRIPTION","DATE"];
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    TableData = () =>{
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
                <AccountBalance accountBalance={this.props.accountBalance} />
                    <form onSubmit={this.handleSubmit}>
                        &nbsp;&nbsp;<strong>Amount:</strong>&nbsp;&nbsp;
                        <input type="text" id="Amount" name='amount' value={this.state.theamount} onChange={this.handleChangeAmount} />
                        &nbsp;&nbsp;<strong>Description:</strong>&nbsp;&nbsp;
                        <input type="text" id="Description" name='description' value={this.state.theDesc} onChange={this.handleChangeDescription} />&nbsp;&nbsp;
                        <input className= "buttn" type="submit" value="Submit" />
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