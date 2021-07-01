import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';


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

    render() {
        return (
            <div>
                <Link to="/">Go Back</Link>
                <div style={{ display: "flex", padding: "20px"}}>
                    <div style={{width: "50%", float: "left"}}>
                        <h1>Account Credits</h1>
                        <h2>Balance: ${Number(this.state.accountBalance).toFixed(2)}</h2>
                        <h3>Current Credits to Account:</h3>
                        {this.props.credits.map( (credit, index) => {
                            return (
                                <li key={index}>
                                <p>Credit {index+1}</p> 
                                {credit.description}
                                <br></br>
                                {credit.date}
                                <br></br>
                                ${credit.amount}
                                </li>
                            )}) 
                        }
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
                                    <input type="text" name="description" onChange={this.handleChange} onSubmit={this.handleSubmit} />
                                </div>
                                <div>
                                    <label htmlFor="Date">Date: </label>
                                    <input type="Date" name="date" onChange={this.handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="Price">Credit Amount: </label>
                                    <input type="number" name="amount" onChange={this.handleChange} />
                                </div>
                                <button>Submit Credit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Credits