// ------------------------------------
// Constants
// ------------------------------------
export const IMAGES_ALL = 'IMAGES_ALL'
export const IMAGES_ALL_SUCCESS = 'IMAGES_ALL_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function imagesAllSuccess(images) {
  return {
    type: IMAGES_ALL_SUCCESS,
    images
  }
}

export const imagesAll = (getImages) => {
  return (dispatch, getState) => {
    return getImages()
      .then(images => dispatch(imagesAllSuccess(images)))
      .catch(error => {
        throw(error)
      })
  }
}

export const actions = {
  imagesAll,
  imagesAllSuccess
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [IMAGES_ALL_SUCCESS]: (state, action) => action.images
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function imagesReducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}