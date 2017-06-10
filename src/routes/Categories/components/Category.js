import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

export const Category = ({ id, name, path, deleteCategory }) => (
    <p>
        <Link to={`/images/${id}`} activeClassName='page-layout__nav-item--active'>{name}</Link>
        {' '}
        <button onClick={() => deleteCategory(id)}>Delete</button>
    </p>
)

Category.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    deleteCategory: PropTypes.func.isRequired
}

export default Category