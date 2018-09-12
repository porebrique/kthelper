import React from 'react';
import * as lodash from 'lodash';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class extends React.Component {


  constructor(props) {
    super(props);
    lodash.bindAll(this, [
    ]);
  }


  render() {
    const { unit, onSelectMovementType } = this.props;
    const groupProps = {
      name: 'movementType',
      onChange: onSelectMovementType
    };
    return (
      <div>
        {unit.name} will: 
        <RadioGroup {...groupProps}>
          <FormControlLabel value="normal" control={<Radio />} label="Move normally" />
          <FormControlLabel value="advance" control={<Radio />} label="Advance" />
          <FormControlLabel value="charge" control={<Radio />} label="Charge" />
          <FormControlLabel value="fallback" control={<Radio />} label="Fall back" />
        </RadioGroup>
      </div>
    )
  }
}
