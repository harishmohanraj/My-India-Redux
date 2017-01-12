// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  //return (dispatch, getState) => {
  return (dispatch) => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
        // dispatch({
        //   type    : COUNTER_DOUBLE_ASYNC,
        //   payload : getState().counter
        // })
    //     fetchSecretSauce()
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     resolve()
    //   }, 0)
    // })
    return new Promise((resolve) => {
      return fetchData()
      .then(response => response.json())
      .then(data => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : data
        })
      })  
    }
    // .then(
    //   sauce => console.info(sauce.json()),
    //   error => console.info('error')
    // );
  }
}

function fetchData() {
  return fetch('https://data.gov.in/node/336961/datastore/export/json');
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => console.info(state,action.payload)//state * 2 // write a util to fetch the data and return it.
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
