import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className, type, content }) => (
  <button className={className} type={type}>
    {content}
  </button>
)

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Button
