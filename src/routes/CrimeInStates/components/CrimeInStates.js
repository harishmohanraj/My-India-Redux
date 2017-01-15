import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import formatChartData from '../../../utils/formatChartData.js';
import Chart from '../../../components/Chart';
import Filter from '../../../components/Filter';

export default class CrimeInStates extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestData()
  }

  renderComponent(formattedChartData) {
    const chartData = {
        labels: formattedChartData.itemName,
        datasets: [
            {
              responsive: true,
              data: formattedChartData.itemValue,
            }
        ]
    };

    const obj = {};
    return ( 
      <div>
        <Filter handleChange = {this.props.handleChange} />
        <Chart chartData= {chartData} />
      </div>
      
      )
  }

  render() {
    let chartData = this.props.crimeInStates.items.data || [];
    const formattedChartData = chartData.length && formatChartData(chartData);
    let content = formattedChartData ? this.renderComponent(formattedChartData) : <CircularProgress />;
    
    return (
      <div>
        {content}
      </div>
    );
  }
}

CrimeInStates.propTypes = {
  requestData   : React.PropTypes.func.isRequired
}