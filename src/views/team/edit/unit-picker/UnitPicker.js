import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import Drawer from '@material-ui/core/Drawer';
import UnitCard from './unit';

export default class extends React.PureComponent {

  static propTypes = {
    availableUnits: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  };

 constructor(props) {
  super(props);

  lodash.bindAll(this, [
    'renderUnit'
  ]);
}  
  
  renderUnit(unit) {
    const props = {
      key: unit.key,
      unit: {
        id: unit.key,
        ...unit
      },
      onAdd: this.props.onChange.bind(this, unit)
    };
    return <UnitCard {...props} />;
  }

  render() {
    const { availableUnits, onClose } = this.props;
    const drawerProps = {
      anchor: 'right',
      open: true,
      onClose
    };

    const renderedUnits = availableUnits.map(this.renderUnit);
    return (
      <Drawer {...drawerProps}>
        <div className="" style={{ width: 600, padding: 20 }}>
          {renderedUnits}
        </div>
      </Drawer>
    );
  }

}
