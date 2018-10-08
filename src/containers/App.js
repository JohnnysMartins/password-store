import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login/Login'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/login"/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
