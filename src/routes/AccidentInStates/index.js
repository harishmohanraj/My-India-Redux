import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'accident-in-states',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AccidentInStates = require('./containers/AccidentInStatesContainer').default
      const reducer = require('./modules/accidentInStates').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'accidentInStates', reducer })

      /*  Return getComponent   */
      cb(null, AccidentInStates)

    /* Webpack named bundle   */
    }, 'accidentInStates')
  }
})