import { connect } from 'react-redux'
import config from '../../../../config/api.config.js'
import { requestData, changeFilter } from '../modules/crimeAgainstWomen'
import CrimeAgainstWomen from '../components/CrimeAgainstWomen'

const mapDispatchToProps = {
  requestData : () => requestData(config.crimeAgainstWomen),
  handleChange: (event, index, value) => changeFilter(value)
}

const mapStateToProps = (state) => ({
  crimeAgainstWomen : state.crimeAgainstWomen
})

export default connect(mapStateToProps, mapDispatchToProps)(CrimeAgainstWomen)

