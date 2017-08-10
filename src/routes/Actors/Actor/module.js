// ------------------------------------
// Reducer
// ------------------------------------
const ACTOR_SELECTED = 'ACTOR_SELECTED'

export const actorSelected = (id) => ({
  type: ACTOR_SELECTED,
  id
})

// ------------------------------------
// Reducer
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTOR_SELECTED]: (state, action) => ({
    id: action.id
  }),
}

export default function actorReducer (state = {}, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}