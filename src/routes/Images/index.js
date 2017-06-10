import { injectReducer } from '../../store/reducers'
import { imagesAll } from './modules/images'
import imagesApi from './api/ImagesApi'

export default (store) => ({
  path : 'images/:id',

  getComponent (nextState, cb) {

    require.ensure([], (require) => {

      const Images = require('./containers/ImagesContainer').default
      const reducer = require('./modules/images').default

      injectReducer(store, { key: 'images', reducer })

      store.dispatch(imagesAll(() => imagesApi.getImages(nextState.params.id)))

      cb(null, Images)

    }, 'images')
  }
})