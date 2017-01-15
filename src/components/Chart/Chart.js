import React, { PropTypes } from 'react';
import './Chart.scss';
import {Bar} from 'react-chartjs';


export const Chart = ({chartData}) => (
  	<Bar data={chartData} width="300" height="250"/>
)

// Chart.propTypes = {
//   chartData: PropTypes.obj.isRequired
// }

export default Chart;



