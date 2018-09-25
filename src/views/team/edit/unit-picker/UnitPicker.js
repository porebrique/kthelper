import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { AvailableUnitsList } from 'src/views/unit';

export default class extends React.PureComponent {

  static propTypes = {
    availableUnits: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
  };

  renderUnitsGrid() {
    const { availableUnits: units, onAdd } = this.props;
    const props = {
      units,
      onAdd
    };
    return <AvailableUnitsList {...props} />;
  }  

  render() {
    const { onClose } = this.props;
    const drawerProps = {
      anchor: 'right',
      open: true,
      onClose
    };

    const renderedUnits = this.renderUnitsGrid();
    return (
      <Drawer {...drawerProps}>
        <div className="" style={{ width: 700, padding: 20 }}>
          {renderedUnits}
        </div>
      </Drawer>
    );
  }

}
