import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from 'src/components';
import unitGridColumns from './unitGridColumns';

export default class extends React.PureComponent {

  static propTypes = {
    unit: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'add'
    ]);
  }  

  add() {
    const { unit, onAdd } = this.props;
    onAdd(unit);
  }

  renderGrid() {
    const { unit } = this.props;
    const props = {
      columns: unitGridColumns,
      items: [unit]
    };
    return <Grid {...props} />;
  }

  render() {
    const { unit } = this.props;
    return (
      <Card className="unit-card" style={{ marginBottom: 20 }}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h4">
            {unit.unitName}
          </Typography>
          {this.renderGrid()}
        </CardContent>
        <CardActions>
          <Button variant="flat" onClick={this.add}>Add</Button>
        </CardActions>
      </Card>
    );
  }
}
