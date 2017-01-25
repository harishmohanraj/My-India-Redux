import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import config from '../../../config/api.config.js'

let renderOptions = (options) => {
  return config[options].map((obj, i) => {
    return (
      <MenuItem key={i} value={obj.value} primaryText={obj.label} />
    )
  });
}

export const Filter = ({handleChange, value, options}) => (
  	<div>
  		<SelectField
          floatingLabelText="Crime Type"
          value={value}
          onChange={handleChange}
        >
          {renderOptions(options)}
        </SelectField>
  	</div>
)

Filter.propTypes = {
  handleChange : React.PropTypes.func.isRequired,
  value : React.PropTypes.string.isRequired,
  options : React.PropTypes.string.isRequired    
}

export default Filter;
