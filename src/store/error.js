import { LOCATION_CHANGE } from './location'
// ------------------------------------
// Constants
// ------------------------------------
export const UNEXPECTED_ERROR = 'UNEXPECTED_ERROR'

// ------------------------------------
// Actions
// ------------------------------------
export function unexpectedError (error) {
  return {
    type: UNEXPECTED_ERROR,
    error
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const initialState = {}
const ACTION_HANDLERS = {
  [UNEXPECTED_ERROR]: (state, action) => ({ error: action.error }),
  [LOCATION_CHANGE]: (state, action) => initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function errorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler
    ? handler(state, action)
    : state
}
