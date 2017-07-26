import React from 'react'
import PropTypes from 'prop-types'
import { LoadingImages } from './LoadingImages'
import { EmptyImages } from './EmptyImages'
import { ImagesList } from './ImagesList'

export const Images = ({ complete = null, items = [] }) => (
  complete !== null &&
    (complete
      ? items.length > 0 ? <ImagesList items={items} /> : <EmptyImages />
      : <LoadingImages />)
)

Images.propTypes = {
  complete: PropTypes.bool,
  items: PropTypes.array
}

export default Images
