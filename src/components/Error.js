import React from 'react'
import './Error.scss'

export default ({ error }) => (
  error !== undefined && <h3 className='error'>Oops! Error occurred! {error.message}</h3>
)
