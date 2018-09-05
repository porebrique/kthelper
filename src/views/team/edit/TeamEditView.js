import React from 'react';
import * as lodash from 'lodash';
import { Button } from 'src/components';
import { Unit } from 'src/models';
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
    this.state = {
      team: {
        ...props.team
      }
    };
  }

  changeFaction(faction) {
    const { team: currentTeam } = this.state;
    const team = {
      ...currentTeam,
      faction
    }
    this.setState({ team });
  }

  // TODO: Think about generating a unit correctly, as a class instance, 
  // and about where it should happen
  addUnit(unitData) {
    const { team: currentTeam } = this.state;
    const unit = new Unit(unitData);
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
    const { dictionaries } = this.props;
    const { team } = this.state;
    const props = {
      selectedFaction: team.faction,
      factions: dictionaries.factions,
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
    const availableUnits = [
      { id: 1, name: 'Some guy' },
      { id: 2, name: 'Another guy' }
    ];
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
