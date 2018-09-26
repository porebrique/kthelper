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
      'onWeaponChange',
      'onChange',
      'save',
      'close'
    ]);
    this.state = {
      selectedWeapons: [
          ...props.unit.weapons
      ]
    };
  }

  close() {
    this.props.onClose(null);
  }
  
  onChange(unit) {
    const { weapons: selectedWeapons } = unit;
    this.setState({ selectedWeapons });
  }

  onWeaponChange(weapon, shouldSelect) {
    const selectedWeapons = [...this.state.selectedWeapons];
    if (shouldSelect) {
      selectedWeapons.push(weapon);
    } else {
      lodash.remove(selectedWeapons, weapon);
    }
    this.setState({ selectedWeapons });
  }

  // TODO
  save() {
    const { selectedWeapons } = this.state;
    const unit = {
      ...this.props.unit,
      weapons: selectedWeapons
    };
    this.props.onSave(unit);
    this.props.onClose();
  }

  renderForm() {
    const { unit } = this.props;
    const { selectedWeapons } = this.state;
    const props = {
      unit: {
        ...unit,
        weapons: selectedWeapons
      },
      onWeaponChange: this.onWeaponChange
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
          <Button onClick={this.save} color="primary">Save</Button>
          <Button onClick={this.close} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>      
    );
  }

}
