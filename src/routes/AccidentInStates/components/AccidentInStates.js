import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import formatChartData from '../../../utils/formatChartData.js'
import Chart from '../../../components/Chart'
import Filter from '../../../components/Filter'

export default class AccidentInStates extends React.Component {
<<<<<<< HEAD
=======
  constructor (props) {
    super(props)
  }
>>>>>>> master

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

    const activeFilter = this.props.accidentInStates.activeFilter || defaultFilterValue

<<<<<<< HEAD
=======
    const obj = {}
>>>>>>> master
    return (
      <div>
        <Filter
          handleChange={this.props.handleChange}
          value={activeFilter}
          options='accidentsFilterMapping'
        />
        <Chart chartData={chartData} />
      </div>

    )
  }

  render () {
    const defaultFilter = this.props.accidentInStates.defaultFilter
    const activeFilter = this.props.accidentInStates.activeFilter
    const filterValue = activeFilter || defaultFilter
    const filterLocation = '2'
    let chartData = this.props.accidentInStates.items.data || []

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

AccidentInStates.propTypes = {
  requestData   : React.PropTypes.func.isRequired
}
