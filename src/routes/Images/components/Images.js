import React from 'react'
import PropTypes from 'prop-types'
import { LoadingImages } from './LoadingImages'
import { EmptyImages } from './EmptyImages'
import { ImagesList } from './ImagesList'

export const Images = ({ complete, items }) => (
  complete
    ? items.length > 0 ? <ImagesList items={items} /> : <EmptyImages />
    : <LoadingImages />
)

Images.propTypes = {
  complete: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}

export default Images
