import React from 'react'
import PropTypes from 'prop-types'
import EmptyCategories from './EmptyCategories'
import CategoriesList from './CategoriesList'

export const Categories = ({ items }) => (
  items.length > 0 ? <CategoriesList items={items} /> : <EmptyCategories />
)

Categories.propTypes = {
  items: PropTypes.array.isRequired
}

export default Categories