import axios from 'axios'
import React from 'react'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value,
            }
        })
    }

    login = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                console.log(res)
            })
            .catch(err => {
                console.log('ERROR HERE: ', err)
            })
        this.setState({
            credentials: {
                username: '',
                password: '',
            }
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <label>Username
                        <input 
                            name = 'username'
                            type = 'text'
                            value = {this.state.credentials.username}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <label>Password
                        <input 
                            name = 'password'
                            type = 'text'
                            value = {this.state.credentials.password}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <button>Log In!</button>
                </form>
            </div>
        )
    }
}

export default Login
