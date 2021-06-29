import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Credits extends Component {
    constructor(props) {
        super(props)
        
        console.log("Logging this props CREDITS",this.props)
    }

    handleChange = (e) => {
        const updatedUser = { ...this.state.description}
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue

        this.setState({ description: updatedUser })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.user)
        this.setState({ redirect: true })
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
                </div>
            </div>
        )

    }
}

export default Credits