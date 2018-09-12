import React from 'react';
import * as lodash from 'lodash';
import { RadioGroup } from 'src/components';

export default class extends React.Component {


  constructor(props) {
    super(props);
    lodash.bindAll(this, [
    ]);
  }


  render() {
    const { unit, selectedMovementType, onSelectMovementType } = this.props;

    const options = [
      { id: 'normal', name: 'Move normally' },
      { id: 'advance', name: 'Advance' },
      { id: 'charge', name: 'Charge' },
      { id: 'fallback', name: 'Fall back' }
    ];
    console.log('selectedMovementType:', selectedMovementType)
    const groupProps = {
      options,
      selectedOption: selectedMovementType,
      name: 'movementType',
      onChange: onSelectMovementType
    };    
    return (
      <div>
        {unit.name} will: 
        <RadioGroup {...groupProps} />
      </div>
    )
  }
}
