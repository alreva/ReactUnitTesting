import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './style.scss'

export const Actor = ({ first, last, age, description, thumbnail }) => (
  <div className='actor-details'>
    <h3>Actor Details: {first} {last}</h3>
    <img src={thumbnail} alt={`${first} ${last}`}/>
    <p>{age}</p>
    <p>{description}</p>
  </div>
)

const mapStateToProps = state => (
  state.actors.find(actor => actor.id === state.actor.id)
)

export default connect(mapStateToProps)(Actor)