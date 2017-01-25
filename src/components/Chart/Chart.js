import React from 'react'
import './Chart.scss'
import { Bar } from 'react-chartjs'

export const Chart = ({ chartData }) => (
  <Bar data={chartData} height='300' />
)

export default Chart
