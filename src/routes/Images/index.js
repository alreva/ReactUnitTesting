import { injectReducer } from 'store/reducers'
import { imagesAll } from './modules/images'

export default (store) => ({
  path : 'images/:id',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Images = require('./containers/ImagesContainer').default
      const reducer = require('./modules/images').default

      injectReducer(store, { key: 'images', reducer })

      store.dispatch(imagesAll(nextState.params.id))

      cb(null, Images)
    }, 'images')
  }
})
