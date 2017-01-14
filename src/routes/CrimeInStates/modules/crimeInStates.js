// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SHOW_LOADER = 'SHOW_LOADER';

const stateTreeKey = 'crimeInStates';
// ------------------------------------
// Actions
// ------------------------------------
const showLoader = getState => {
  return {
    type: SHOW_LOADER,
    payload: getState()[stateTreeKey].isFetching
  }
}

const receiveData = (json) => {
  return {
    type: RECEIVE_DATA,
    payload: json
  } 
}
const callAPI = APIName => fetch(APIName);

const fetchData = APIName => (dispatch, getState) => {
  dispatch(showLoader(getState))
  return callAPI(APIName)
  .then(response => response.json())
  .then(json => dispatch(receiveData(json)))
}

export const requestData = APIName => (dispatch, getState) => {
  return dispatch(fetchData(APIName))
}

export const actions = {
  requestData
}

const callReducer = (state , action) => {
  switch(action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        items: action.payload
      }
    case SHOW_LOADER:
      return {
        ...state,
        isFetching: !action.payload
      }
    
    default:
      return state
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_DATA]: (state, action) => callReducer(state, action),
  [SHOW_LOADER]: (state, action) => callReducer(state, action)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialBaseState = {
  isFetching: false,
  items: []
}
export default function crimeInStates (state = initialBaseState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
