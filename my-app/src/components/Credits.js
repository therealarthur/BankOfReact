import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../css/Credits.css';


class Credits extends Component {
    constructor(props) {
        super(props);
        
        // console.log("State in Credits: ",this.state)
        // console.log("Props in Credits: ",this.props)
        this.state = {
            ...this.props,
            description: '',
            date: '',
            amount: -1
        }
    }

    handleChange = (e) => {
        let updatedInfo = {...this.state}
        updatedInfo[e.target.name] = e.target.value
        this.setState({...updatedInfo})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.amount === -1){
            return;
        }
        // console.log("before submitted: ", this.state, this.state.amount)
        console.log("submitted: ", this.state.accountBalance,this.state.amount)
        this.state.credits.push({
            id: "Wasn't asked for as a deliverable, so this is irrelevant",
            description: this.state.description,
            amount: Number(this.state.amount),
            date: this.state.date
        })
        // let tempNum = Number(this.state.accountBalance) + Number(this.state.amount)
        // this.state.accountBalance = Number(tempNum).toFixed(2
        this.state.accountBalance = Number(this.state.accountBalance) + Number(this.state.amount)
        this.state.creditBalance = Number(this.state.creditBalance) + Number(this.state.amount)
        this.setState({
            accountBalance: this.state.accountBalance,
            creditBalance: this.state.creditBalance
        })
        console.log("submitted: ", this.state.accountBalance,this.state.amount)
        this.props.updateState(this.state)
        var form = document.getElementById("mainForm");
        form.reset();
    }

    TableHeader = () => {
        let header = ["#", "AMOUNT", "DESCRIPTION", "DATE"];
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }


    TableData = () => {
        return this.props.credits.map((credits, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{credits.amount}</td>
                    <td>{credits.description}</td>
                    <td>{credits.date}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <Link to="/">Go Back</Link>
                <div style={{ display: "flex", padding: "20px"}}>
                    <div className = "credits_table">
                        <h1>Account Credits</h1>
                        <h2>Balance: ${Number(this.state.accountBalance).toFixed(2)}</h2>
                        <h3>Current Credits to Account:</h3>
                        <table id='credits_table'>
                        <thead>
                            <tr>{this.TableHeader()}</tr>
                        </thead>
                        <tbody>
                            {this.TableData()}
                        </tbody>
                        </table>
                    </div>
                    <div style={{width: "50%", float: "left", padding: "20px"}}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>Add Credit:</h2>
                        <div>
                            <form id="mainForm" onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="Description">Description: </label>
                                    <br />
                                    <input type="text" name="description" onChange={this.handleChange} onSubmit={this.handleSubmit} />
                                </div>
                                <div>
                                    <label htmlFor="Date">Date: </label>
                                    <br />
                                    <input type="Date" name="date" onChange={this.handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="Price">Credit Amount: </label>
                                    <br/>
                                    <input type="number" name="amount" onChange={this.handleChange} />
                                </div>
                                <button className = "btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Credits