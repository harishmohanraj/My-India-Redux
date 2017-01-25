import React from 'react'
import { connect } from 'react-redux';
import config from '../../../../config/api.config.js';
import { requestData, changeFilter } from '../modules/accidentInStates';
import AccidentInStates from '../components/AccidentInStates'

const mapDispatchToProps = {
  requestData : () => requestData(config.accidentInStates),
  handleChange: (event, index, value) => changeFilter(value)
}


const mapStateToProps = (state) => ({
  accidentInStates : state.accidentInStates
})


export default connect(mapStateToProps, mapDispatchToProps)(AccidentInStates)

