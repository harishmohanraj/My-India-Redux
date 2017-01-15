import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



export const Filter = ({handleChange}) => (
  	<div>
  		<SelectField
          floatingLabelText="Frequency"
          value="0"
          onChange={handleChange}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
  	</div>
)

Filter.propTypes = {
  handleChange : React.PropTypes.func.isRequired 
}

export default Filter;