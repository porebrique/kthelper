import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Dropdown } from 'src/components';

export default class extends React.PureComponent {

  renderSelector() {
    const { selectedFaction, factions, onChange } = this.props;
    const props = {
      id: 'faction',
      name: 'Pick a faction',
      value: selectedFaction,
      options: factions,
      onChange
    };
    return <Dropdown {...props} />;
  }

  render() {
    return (
      <div className="faction-widget">
        <Paper>
          <div className="widget-wrapper">
            {this.renderSelector()}
          </div>
        </Paper>
      </div>
    );
  }

}
