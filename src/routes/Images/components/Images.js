import React from 'react'
import PropTypes from 'prop-types'
import { EmptyImages } from './EmptyImages'
import { ImagesList } from './ImagesList'

export const Images = ({ items }) => (
  items.length > 0 ? <ImagesList items={items} /> : <EmptyImages />
)

Images.propTypes = {
  items: PropTypes.array.isRequired
}

export default Images