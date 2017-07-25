import React from 'react'
import PropTypes from 'prop-types'
import Category from '../containers/CategoryContainer'

export const CategoriesList = ({ items }) => (
  <div>
    <h3>Please select a category from the list below:</h3>
    {items.map(element => (<Category key={element.id} {...element} />))}
  </div>
)

CategoriesList.propTypes = {
  items: PropTypes.array.isRequired
}

export default CategoriesList
