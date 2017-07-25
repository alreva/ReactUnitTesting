import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

export const ImagesList = ({ items }) => (
  <div>
    {items.map(item => <Image key={item} path={item} />)}
  </div>
)

ImagesList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ImagesList
