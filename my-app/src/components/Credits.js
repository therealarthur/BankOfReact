import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credits: this.props.credits
        }
        let description = ''
        let date = ''
        let amount = 0
        console.log("Logging this props CREDITS",this.state.credits)
    }

    handleChange = (e) => {
        console.log("handling change", e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted.", this.description, this.date, this.amount)
    }

    render() {
        return (
            <div style={{ display: "flex", padding: "20px"}}>
                <div style={{width: "50%", float: "left"}}>
                    <h1>Account Credits</h1>
                    <h2>Balance: ${this.props.accountBalance}</h2>
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
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="Description">Description: </label>
                                <input type="text" name="Description" onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.description} />
                            </div>
                            <div>
                                <label htmlFor="Date">Date: </label>
                                <input type="Date" name="Date" value={this.date} />
                            </div>
                            <div>
                                <label htmlFor="Price">Credit Amount: </label>
                                <input type="Price" name="Price" value={this.amount} />
                            </div>
                            <button>Submit Credit</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default Credits