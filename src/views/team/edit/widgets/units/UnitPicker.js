import React from 'react';
import { Dropdown } from 'src/components';

export default class extends React.PureComponent {

  render() {
    const { availableUnits, onChange } = this.props;
    const props = {
      id: 'unit',
      name: 'Add model',
      placeholder: 'Add',
      value: null,
      options: availableUnits,
      onChange
    };
    return <Dropdown {...props} />;
  }

}
