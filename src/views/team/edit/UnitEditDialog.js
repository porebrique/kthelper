import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Button } from 'src/components';
import { UnitEditView } from 'src/views/unit';

const TransitionComponent = props => <Slide direction="up" {...props} />;

export default class extends React.PureComponent {

  static propTypes = {
    unit: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'close'
    ]);
  }

  close() {
    this.props.onClose(null);
  }

  renderForm() {
    const { unit } = this.props;
    const props = {
      unit
    };
    return <UnitEditView {...props} />;
  }

  render() {
    const { unit }= this.props;
    const dialogProps = {
      open: true,
      TransitionComponent,
      keepMounted: true,
      onClose: this.close
    };
    return (
      <Dialog {...dialogProps}>
        <DialogTitle>
          {unit.name}
        </DialogTitle>
        <DialogContent>
          {this.renderForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.close} color="primary">Save</Button>
          <Button onClick={this.close} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>      
    );
  }

}
