import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'

const LoginForm = ({ email, password, loginSubmit, handleOnChange }) => (
  <form onSubmit={loginSubmit}>
    <div className="form-group">
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleOnChange}
      />
    </div>
    <div className="form-group">
      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleOnChange}
      />
    </div>
    <div className="flex flex-justify-end">
      <Button
        className="flex-100 btn btn-primary"
        type="submit"
        content="Login"
      />
    </div>
  </form>
)

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired
}

export default LoginForm
