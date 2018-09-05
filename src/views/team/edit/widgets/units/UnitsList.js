import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import UnitPicker from './UnitPicker';

export default class extends React.PureComponent {

  static propTypes = {
    availableUnits: PropTypes.array.isRequired,
    units: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired
  };
  
  renderUnit(unit) {
    return <div key={unit.uid} className="unit">{unit.name}</div>;
  }

  renderUnitPicker() {
    const { availableUnits, onAdd } = this.props;
    const props = {
      availableUnits,
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
              </div>
            </div> 
          </div>
        </Paper>
      </div>
    );
  }

}
