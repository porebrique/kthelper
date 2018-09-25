import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Button } from 'src/components';
import { UnitsList } from 'src/views/unit';

export default class extends React.PureComponent {

  static propTypes = {
    units: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isUnitsPanelOpen: false
    };
  }
  
  renderUnitsGrid() {
    const { units, onRemove } = this.props;
    const props = {
      units,
      onRemove
    };
    return <UnitsList {...props} />;
  }

  render() {
    const { onTogglePicker } = this.props;
    const renderedUnits = this.renderUnitsGrid();
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
                {/* {unitPicker} */}
                <Button onClick={onTogglePicker}>Add units</Button>
              </div>
            </div> 
          </div>
        </Paper>
      </div>
    );
  }

}
