import { connect } from 'react-redux'
import { imagesAll, imagesAllSuccess } from '../modules/images'

import Images from '../components/Images'

const mapDispatchToProps = {
  imagesAll,
  imagesAllSuccess
}

const mapStateToProps = (state) => ({
  complete : state.images.complete,
  items : state.images.images
})

export default connect(mapStateToProps, mapDispatchToProps)(Images)
