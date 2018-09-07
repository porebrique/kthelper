import React from 'react';
import * as lodash from 'lodash';
import { Button } from 'src/components';
import library from 'src/library';
import { FactionPicker, UnitsList } from './widgets';
import './style.scss';

export default class extends React.PureComponent {

  static defaultProps = {
    team: {}
  }

  constructor(props) {
    super(props);

    lodash.bindAll(this, [
      'addUnit',
      'changeFaction',
      'save'
    ]);

    // TODO: consider plain state structure, assuming there is nothing but team inside
    // TODO: team.faction can be class instance or plain object at various moments, which is wrong
    this.state = {
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

  renderUnits() {
    const { team } = this.state;

    if (!team.faction) {
      return null;
    }
    
    const { units } = team;
    const availableUnits = this.getAvailableUnits();
    const props = {
      availableUnits,
      units,
      onAdd: this.addUnit
    };
    return <UnitsList {...props} />;
  }

  render() {
    const { team } = this.props;
    const faction = this.renderFaction();
    const units = this.renderUnits();
    return (
        <div className="kth-team-edit">
            Editing team "{team.name}"
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
