import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import Paper from '@material-ui/core/Paper';
import { Button } from 'src/components';
import UnitPicker from './UnitPicker';

export default class extends React.PureComponent {

  static propTypes = {
    availableUnits: PropTypes.array.isRequired,
    units: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    lodash.bindAll(this, [
      'toggleUnitPicker'
    ]);
    this.state = {
      isUnitsPanelOpen: false
    };
  }
  
  toggleUnitPicker() {
    const isUnitsPanelOpen = !this.state.isUnitsPanelOpen;
    this.setState({ isUnitsPanelOpen });
  }
  renderUnit(unit) {
    return <div key={unit.uid} className="unit">{unit.name}</div>;
  }

  renderUnitPicker() {
    const { isUnitsPanelOpen } = this.state;
    if (!isUnitsPanelOpen) {
      return null;
    }

    const { availableUnits, onAdd } = this.props;
    const props = {
      availableUnits,
      onClose: this.toggleUnitPicker,
      onChange: onAdd
    };
    return <UnitPicker {...props} />;
  }

  render() {
    const { units } = this.props;
    const renderedUnits = units.map(this.renderUnit);
    const unitPicker = this.renderUnitPicker();
    return (
      <div className="widget units">
        <Paper>
          <div className="widget-wrapper">
            <div className="widget-title">
              Models
            </div>         
            <div className="widget-content">
              <div className="units-list">
                {renderedUnits}
              </div>
              <div className="unit-picker">
                {unitPicker}
                <Button onClick={this.toggleUnitPicker}>Add units</Button>
              </div>
            </div> 
          </div>
        </Paper>
      </div>
    );
  }

}
