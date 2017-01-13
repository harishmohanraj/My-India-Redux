import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'crime-in-states',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const CrimeInStates = require('./containers/CrimeInStatesContainer').default
      const reducer = require('./modules/crimeInStates').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'crimeInStates', reducer })

      /*  Return getComponent   */
      cb(null, CrimeInStates)

    /* Webpack named bundle   */
    }, 'crimeInStates')
  }
})