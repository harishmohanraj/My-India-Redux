import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import config from '../../../config/api.config.js'


let renderOptions = () => {
  return config.crimeInStatesFilterMapping.map((obj, i) => {
    return (
      <MenuItem key={i} value={obj.value} primaryText={obj.label} />
    )
  });
}

export const Filter = ({handleChange, value}) => (
  	<div>
  		<SelectField
          floatingLabelText="Crime Type"
          value={value || "RAPE (SECTION 376 IPC)"}
          onChange={handleChange}
        >
          {renderOptions()}
        </SelectField>
  	</div>
)

Filter.propTypes = {
  handleChange : React.PropTypes.func.isRequired,
  value : React.PropTypes.string.isRequired  
}

export default Filter;
