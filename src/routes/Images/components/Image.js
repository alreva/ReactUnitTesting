import React from 'react'
import PropTypes from 'prop-types'

export const Image = ({ path }) => (
  <p><img src={path} /></p>
)

Image.propTypes = {
  path: PropTypes.string.isRequired
}

export default Image
