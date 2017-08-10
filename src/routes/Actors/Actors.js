import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './style.scss'

export const ActorListItem = ({ id, first, last }) => (
  <Link to={`/actors/${id}`} className='actor' activeClassName='actor-active'>{first} {last}</Link>
)

export const ActorsList = ({ actors=[] }) => (
  <div>
    {actors.map(actor => <ActorListItem key={actor.id} {...actor} />)}
  </div>
)

export const Actors = ({ actors = [], children=[] }) => (
  <div>
    <h2>Actors List</h2>
    <hr />
    { actors.length > 0
      ? <ActorsList actors={actors} />
      : <h3>No actors</h3>}
    <hr />
    {children}
  </div>
)

const mapStateToProps = (state) => ({
  actors: state.actors
})

export default connect(mapStateToProps)(Actors)
