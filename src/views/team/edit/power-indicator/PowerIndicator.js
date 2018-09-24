import React from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField } from 'src/components';

export default class extends React.PureComponent {

  render() {
    const { power: value } = this.props;
    const props = {
      name: 'Power (no weapons and wargear yet)',
      id: 'power',
      disabled: true,
      value
    };

    return (
      <div className="widget faction">
        <Paper>
          <div className="widget-wrapper">
            <TextField {...props}/>
          </div>
        </Paper>
      </div>
    );
  }

}
