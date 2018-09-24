import React from 'react';
import * as lodash from 'lodash';
import { Button } from 'src/components';
import library from 'src/library';
import UnitPicker from './unit-picker';
import UnitsList from './units-list';
import FactionPicker from './faction-picker';

import './style.scss';

export default class extends React.PureComponent {

  static defaultProps = {
    team: {}
  }

  constructor(props) {
    super(props);

    lodash.bindAll(this, [
      'addUnit',
      'removeUnit',
      'toggleUnitPicker',
      'changeFaction',
      'save'
    ]);

    // TODO: consider plain state structure
    // TODO: team.faction can be class instance or plain object at various moments, which is wrong
    this.state = {
      isUnitsPanelOpen: false,
      team: {
        ...props.team
      }
    };
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

  
  addUnit(Unit) {
    const { team: currentTeam } = this.state;
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

  removeUnit(unit) {
    const { team } = this.state;
    const units = lodash.reject(team.units, { id: unit.id });
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
      onChange: this.addUnit
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
      units,
      onTogglePicker: this.toggleUnitPicker,
      onRemove: this.removeUnit,
      onAdd: this.addUnit
    };
    return <UnitsList {...props} />;
  }

  render() {
    const { team } = this.props;
    const faction = this.renderFaction();
    const units = this.renderUnits();
    const unitPicker = this.renderUnitPicker();
    return (
        <div className="kth-team-edit">
            Editing team "{team.name}"
            {unitPicker}
            <div>
              {faction}
            </div>
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
