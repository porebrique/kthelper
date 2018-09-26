import React from 'react';
import * as lodash from 'lodash';
import Grid from '@material-ui/core/Grid';
import { Button } from 'src/components';
import library from 'src/library';
import UnitPicker from './unit-picker';
import { UnitsList } from './units-list';
import FactionPicker from './faction-picker';
import PowerIndicator from './power-indicator';
import UnitEditDialog from './UnitEditDialog';

import './style.scss';

export default class extends React.Component {
// export default class extends React.PureComponent {

  static defaultProps = {
    team: {}
  }

  constructor(props) {
    super(props);

    lodash.bindAll(this, [
      'addUnit',
      'updateUnit',
      'removeUnit',
      'toggleUnitDialog',
      'toggleUnitPicker',
      'changeFaction',
      'save'
    ]);

    // TODO: consider plain state structure
    // TODO: team.faction can be class instance or plain object at various moments, which is wrong
    this.state = {
      isUnitsPanelOpen: false,
      editUnit: null,
      team: {
        ...props.team
      }
    };
  }

  getPower() {
    const { team } = this.state;
    const { units } = team;
    return units.reduce((result, unit) => result + unit.getPower(), 0);
  }

  getAvailableUnits() {
    const { team } = this.state;
    const allAvailableUnits = team.faction ? library.getUnitsByFactionId(team.faction.key) : [];
    const addedUnits = lodash.groupBy(team.units, 'key');

    return allAvailableUnits.filter(unit => this.canAddSimilarUnits(unit, addedUnits));
  }

  toggleUnitPicker() {
    const isUnitsPanelOpen = !this.state.isUnitsPanelOpen;
    this.setState({ isUnitsPanelOpen });
  }

  toggleUnitDialog(editUnit = null) {
    this.setState({ editUnit });    
  }

  changeFaction(faction) {
    const { team: currentTeam } = this.state;
    const team = {
      ...currentTeam,
      faction: {
        ...faction,
        key: faction.id
      }
    }
    this.setState({ team });
  }

  canAddSimilarUnits(unit, addedUnits) {
    const { key, max } = unit;
    if (!max) {
      return true;
    }
    const sameTypeUnits = addedUnits[key] || [];
    return sameTypeUnits.length < max;
  }

  
  addUnit(key) {
    const { team: currentTeam } = this.state;
    const Unit = lodash.find(this.getAvailableUnits(), { key });
    const unit = new Unit();
    const team = {
      ...currentTeam,
      units: [
        ...currentTeam.units,
        unit
      ]
    };
    this.setState({ team });
  }

  removeUnit(uid) {
    const { team } = this.state;
    const units = lodash.reject(team.units, { uid });
    this.setState({
      team: {
        ...team,
        units
      }
    });
  }

  save() {
    const { team } = this.state;
    this.props.onSave(team);
  }

  // NB: This lefts unit instance the same, which prevents re-rendering
  updateUnit(unit) {
    const team = {...this.state.team};
    const changedUnit = team.units.find(({ uid }) => uid === unit.uid);
    changedUnit.weapons = unit.weapons;
    this.setState({ team });
  }

  renderFaction() {
    const { team } = this.state;
    const props = {
      selectedFaction: team.faction,
      factions: library.factions,
      onChange: this.changeFaction
    };
    return <FactionPicker {...props} />;
  }

  renderUnitPicker() {
    const { isUnitsPanelOpen } = this.state;
    if (!isUnitsPanelOpen) {
      return null;
    }

    const availableUnits = this.getAvailableUnits();
    const props = {
      availableUnits,
      onClose: this.toggleUnitPicker,
      onAdd: this.addUnit
    };
    return <UnitPicker {...props} />;
  }
  
  renderUnits() {
    const { team } = this.state;

    if (!team.faction) {
      return null;
    }
    
    const { units } = team;
    const props = {
      // TODO: otherwise render is not triggered after .updateUnit
      units: units.map(unit => ({...unit})),
      onTogglePicker: this.toggleUnitPicker,
      onEdit: this.toggleUnitDialog,
      onRemove: this.removeUnit
    };
    return <UnitsList {...props} />;
  }

  renderUnitDialog() {
    const { editUnit } = this.state;
    if (!editUnit) {
      return null;
    }
    
    const props = {
      unit: editUnit,
      onSave: this.updateUnit,
      onClose: this.toggleUnitDialog
    }
    return <UnitEditDialog {...props} />;
  }

  render() {
    const { team } = this.props;
    const faction = this.renderFaction();
    const units = this.renderUnits();
    const unitPicker = this.renderUnitPicker();
    const power = this.getPower();
    const unitDialog = this.renderUnitDialog();
    return (
        <div className="kth-team-edit">
            Editing team "{team.name}"
            {unitPicker}
            {unitDialog}
            <Grid container spacing={8}>
              <Grid item xs={3}>
                {faction}
              </Grid>
              <Grid item xs={2}>
                <PowerIndicator power={power}/>
              </Grid>              
            </Grid>            
            <div>
              {units}
            </div>
            <div className="form-actions">
              <Button onClick={this.save}>Save</Button>
            </div>
        </div>
    );
  }
}
