
// ------------------------------------
// API
// ------------------------------------
const getAllActors = () => {
  return fetch('/api/v1/actors/all.json')
    .then(response => response.json())
}


// /api/v1/actors/all.json

// ------------------------------------
// Actions
// ------------------------------------
const ACTORS_ALL_STARTED = 'ACTORS_ALL_STARTED'
const ACTORS_ALL_COMPLETE = 'ACTORS_ALL_COMPLETE'

export const actorsAllStarted = () => {
  return {
    type: ACTORS_ALL_STARTED
  }
}

export const actorsAllComplete = (actors) => {
  return {
    type: ACTORS_ALL_COMPLETE,
    actors
  }
}

export const allActors = () => {
    return (dispatch, getState) => {
    dispatch(actorsAllStarted())
    getAllActors()
      .then(actors => dispatch(actorsAllComplete(actors)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTORS_ALL_STARTED]: (state, action) => state,
  [ACTORS_ALL_COMPLETE]: (state, action) => {
    console.log(`${ACTORS_ALL_COMPLETE} executed :)`)
    return action.actors
  },
}

export default function actorsReducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}