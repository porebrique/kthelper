import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'src/components';
import columns from './columns-added';

export default class extends React.PureComponent {

  static propTypes = {
    units: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  getProps() {
    const { units, onRemove } = this.props;
    const items = units.map(unit => ({ ...unit, id: unit.uid }));
    return {
      items,
      onRemove,
      columns
    };

  }

  render() {
    const props = this.getProps();
    return <Grid {...props} />;
  }

}
