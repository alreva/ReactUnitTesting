// ------------------------------------
// API
// ------------------------------------
function getAllCategories () {
  return fetch('/api/v1/images/all.json')
    .then(response => response.json())
    .catch(error => error)
}

// ------------------------------------
// Constants
// ------------------------------------
export const CATEGORIES_ALL = 'CATEGORIES_ALL'
export const CATEGORIES_ALL_SUCCESS = 'CATEGORIES_ALL'
export const CATEGORIES_DELETE = 'CATEGORIES_DELETE'

// ------------------------------------
// Actions
// ------------------------------------
export function categoriesAllSuccess (categories) {
  return {
    type: CATEGORIES_ALL_SUCCESS,
    categories
  }
}

export const categoriesAll = () => {
  return (dispatch, getState) => {
    return getAllCategories()
      .then(categories => dispatch(categoriesAllSuccess(categories)))
      .catch(error => {
        throw (error)
      })
  }
}

export function deleteCategory (id) {
  return {
    type: CATEGORIES_DELETE,
    id
  }
}

export const actions = {
  categoriesAll,
  categoriesAllSuccess
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CATEGORIES_ALL_SUCCESS]: (state, action) => action.categories,
  [CATEGORIES_DELETE]: (state, action) => state.filter(c => c.id !== action.id)
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function categoriesReducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
