import React from 'react'
import './Error.scss'

export default ({ error = { message: null } }) => (
  error.message && <h3 className='error'>Oops! Error occurred! {error.message}</h3>
)
