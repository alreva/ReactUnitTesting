import { UNEXPECTED_ERROR, unexpectedError } from 'store/error'

// ------------------------------------
// Constants
// ------------------------------------
export const IMAGES_CATEGORY_SWITCHED = 'IMAGES_CATEGORY_SWITCHED'
export const IMAGES_ALL_SUCCESS = 'IMAGES_ALL_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function imagesAllSuccess (images) {
  return {
    type: IMAGES_ALL_SUCCESS,
    images
  }
}

export function imagesCategorySwitched () {
  return {
    type: IMAGES_CATEGORY_SWITCHED
  }
}

export const imagesAll = (getImages) => {
  return (dispatch, getState) => {
    dispatch(imagesCategorySwitched())
    return getImages()
      .then(images => dispatch(imagesAllSuccess(images)))
      .catch(error => {
        dispatch(unexpectedError(error))
      })
  }
}

export const actions = {
  imagesAll,
  imagesAllSuccess,
  imagesCategorySwitched
}

// ------------------------------------
// Action Handlers
// ------------------------------------

export const initialState = {}

const ACTION_HANDLERS = {
  [IMAGES_CATEGORY_SWITCHED]: (state, action) => ({
    complete: false
  }),
  [IMAGES_ALL_SUCCESS]: (state, action) => ({
    complete: true,
    images: action.images
  }),
  [UNEXPECTED_ERROR]: (state, action) => initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function imagesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
