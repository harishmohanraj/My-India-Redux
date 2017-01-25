// ------------------------------------
// Constants
// ------------------------------------
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const stateTreeKey = 'crimeInStates';
// ------------------------------------
// Actions
// ------------------------------------
// const showLoader = getState => {
  // return {
  //   type: SHOW_LOADER,
  //   payload: getState()[stateTreeKey].isFetching
  // }
// }

const receiveData = (json) => {
  return {
    type: RECEIVE_DATA,
    payload: json
  } 
}
const callAPI = APIName => fetch(APIName);

const fetchData = APIName => (dispatch, getState) => {
  //dispatch(showLoader(getState))
  return callAPI(APIName)
  .then(response => response.json())
  .then(json => dispatch(receiveData(json)))
}

export const requestData = APIName => (dispatch, getState) => {
  return dispatch(fetchData(APIName))
}

export const changeFilter = value => {
  return {
    type: CHANGE_FILTER,
    payload: value
  }
}

export const actions = {
  requestData,
  changeFilter
}

const callReducer = (state , action) => {
  switch(action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        items: action.payload
      }
    case CHANGE_FILTER:
      return {
        ...state,
        activeFilter: action.payload
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
  [CHANGE_FILTER]: (state, action) => callReducer(state, action)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialBaseState = {
  isFetching: false,
  items: [],
  activeFilter: '',
  defaultFilter: 'RAPE (SECTION 376 IPC)'
}
export default function crimeInStates (state = initialBaseState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
