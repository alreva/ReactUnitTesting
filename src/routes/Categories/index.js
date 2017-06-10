import { injectReducer } from '../../store/reducers'
import { categoriesAll } from './modules/categories'
import categoriesApi from './api/CategoriesApi'

export default (store) => ({
  path : 'images',

  getComponent (nextState, cb) {

    require.ensure([], (require) => {

      const Categories = require('./containers/CategoriesContainer').default
      const reducer = require('./modules/categories').default

      injectReducer(store, { key: 'categories', reducer })

      store.dispatch(categoriesAll(categoriesApi.getAllCategories))

      cb(null, Categories)

    }, 'categories')
  }
})