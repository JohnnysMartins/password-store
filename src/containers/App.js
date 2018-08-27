import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login/Login'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
