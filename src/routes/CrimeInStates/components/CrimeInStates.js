import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class CrimeInStates extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestData()
  }

  renderComponent() {
    return (<p>Check</p>)
  }

  render() {
    let chartData = this.props.crimeInStates.items.fields || [];
    let content = chartData.length ? this.renderComponent() : <CircularProgress />;
    
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