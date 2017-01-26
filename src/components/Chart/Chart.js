import React from 'react'
import './Chart.scss'
import { Bar } from 'react-chartjs'

export const Chart = ({ chartData }) => (
  <Bar data={chartData} height='300' />
)

Chart.propTypes = {
  chartData : React.PropTypes.object.isRequired
}

export default Chart
