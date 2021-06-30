import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/Login.css'

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false
        }
    }

    handleChange = (e) => {
        const updatedUser = { ...this.state.user }
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue

        this.setState({ user: updatedUser })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.mockLogIn(this.state.user)
        this.setState({ redirect: true })
    }

    render() {
        console.log("inside Login: ", this.props)
        if (this.state.redirect) {
            return (<Redirect to="/userProfile" />)
        }
        return (
            <form onSubmit={this.handleSubmit}>
            <div className = "login_form">
                <div className = "username">
                <label htmlFor="userName">Username:</label>
                <br />
                <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
                <br />
            </div>
            <div className= "passwrd">
                <label htmlFor="password">Password:</label>
                <br/>
                <input type="password" name="password" />
                <br />
            </div>
            <button className = "btn" >Log In</button>
            </div>
        </form>
        )

    }
}

export default LogIn