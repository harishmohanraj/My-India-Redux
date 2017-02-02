import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import formatChartData from '../../../utils/formatChartData.js'
import Chart from '../../../components/Chart'
import Filter from '../../../components/Filter'

export default class CrimeAgainstWomen extends React.Component {

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

    const activeFilter = this.props.crimeAgainstWomen.activeFilter || defaultFilterValue

    return (
      <div>
        <p>
          This Illustration shows the top 10 states that have highest crime rate against women.
          Please use the below select box to filter the results based on crime category.
        </p>
        <Filter
          handleChange={this.props.handleChange}
          value={activeFilter}
          options='crimeAgainstWomenFilterMapping'
        />
        <Chart chartData={chartData} />
      </div>

    )
  }

  render () {
    const defaultFilter = this.props.crimeAgainstWomen.defaultFilter
    const activeFilter = this.props.crimeAgainstWomen.activeFilter
    const filterValue = activeFilter || defaultFilter
    const filterLocation = '1'
    let chartData = this.props.crimeAgainstWomen.items.data || []

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

CrimeAgainstWomen.propTypes = {
  requestData: React.PropTypes.func.isRequired,
  crimeAgainstWomen: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func.isRequired
}
