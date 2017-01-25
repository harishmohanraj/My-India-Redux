import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import formatChartData from '../../../utils/formatChartData.js'
import Chart from '../../../components/Chart'
import Filter from '../../../components/Filter'

export default class CrimeInStates extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.requestData()
  }

  renderComponent (formattedChartData, defaultFilterValue) {
    const chartData = {
      labels: formattedChartData.itemName,
      datasets: [
        {
          responsive: true,
          data: formattedChartData.itemValue
        }
      ]
    }

    const activeFilter = this.props.crimeInStates.activeFilter || defaultFilterValue

    const obj = {}
    return (
      <div>
        <Filter
          handleChange={this.props.handleChange}
          value={activeFilter}
          options='crimeInStatesFilterMapping'
        />
        <Chart chartData={chartData} />
      </div>

    )
  }

  render () {
    const defaultFilter = this.props.crimeInStates.defaultFilter
    const activeFilter = this.props.crimeInStates.activeFilter
    const filterValue = activeFilter || defaultFilter
    const filterLocation = '1'
    let chartData = this.props.crimeInStates.items.data || []

    const inputToFormatData = {
      'chartData': chartData,
      'filterValue': filterValue,
      'filterLocation': filterLocation
    }

    const formattedChartData = chartData.length && formatChartData(inputToFormatData)

    let content = formattedChartData
                  ? this.renderComponent(formattedChartData, defaultFilter)
                  : <CircularProgress />

    return (
      <div>
        {content}
      </div>
    )
  }
}

CrimeInStates.propTypes = {
  requestData   : React.PropTypes.func.isRequired
}
