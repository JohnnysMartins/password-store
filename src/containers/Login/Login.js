import React, { Component } from 'react'
import FormLogin from '../../components/Login/FormLogin'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
    this.loginSubmit = this.loginSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  loginSubmit(event) {
    event.preventDefault()
    console.log(this.state, this.props)
  }

  handleOnChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="flex flex-flow-column flex-30 login position-center">
        <h2 className="login-authentication">Autentição</h2>
        <div className="flex-justify-center">
          <FormLogin
            email={email}
            password={password}
            handleOnChange={this.handleOnChange}
            loginSubmit={this.loginSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(Login)
