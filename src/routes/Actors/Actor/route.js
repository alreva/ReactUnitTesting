import { injectReducer } from '../../../store/reducers'
import { actorSelected } from './module'

export default (store) => ({
  path : '/actors/:id',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Component = require('./Actor').default
      const reducer = require('./module').default
      injectReducer(store, { key: 'actor', reducer })
      store.dispatch(actorSelected(parseInt(nextState.params.id)))
      cb(null, Component)
    }, 'actor')
  }
})