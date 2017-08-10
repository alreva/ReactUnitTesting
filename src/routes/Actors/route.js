import { injectReducer } from '../../store/reducers'
import ActorRoute from './Actor/route'
import { allActors } from './module'

export default (store) => ({
  path : '/actors',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./Actors').default
      const reducer = require('./module').default
      injectReducer(store, { key: 'actors', reducer })
      if (store.getState().actors.length == 0) {
        store.dispatch(allActors())
      }
      cb(null, Component)
    }, 'actors')
  },

  childRoutes: [
    ActorRoute(store)
  ]
})