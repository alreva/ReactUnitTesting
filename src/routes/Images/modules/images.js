import { UNEXPECTED_ERROR, unexpectedError } from 'store/error'

// ------------------------------------
// API
// ------------------------------------
function getImages (categoryId) {
  return fetch(`/api/v1/images/${categoryId}.json`)
    .then(response => response.json())
    .catch(response => {
      throw new Error(response._bodyText.substr(1, response._bodyText.length - 2))
    })
}

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

export function imagesCategorySwitched (id) {
  return {
    type: IMAGES_CATEGORY_SWITCHED,
    id
  }
}

export const imagesAll = (categoryId) => {
  return (dispatch, getState) => {
    dispatch(imagesCategorySwitched(categoryId))
    return getImages(categoryId)
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
    complete: false,
    categoryId: action.id
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
