import React from 'react';
import * as lodash from 'lodash';
import { Button } from 'src/components';
import { FactionPicker } from './widgets';
import './style.scss';

export default class extends React.PureComponent {

  static defaultProps = {
    team: {}
  }

  constructor(props) {
    super(props);

    lodash.bindAll(this, [
      'changeFaction',
      'save'
    ]);

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

  render() {
    const { team } = this.props;
    const faction = this.renderFaction();
    return (
        <div className="kth-team-edit">
            Editing team "{team.name}"
            <div>
              {faction}
            </div>
            <div className="form-actions">
              <Button onClick={this.save}>Save</Button>
            </div>
        </div>
    );
  }
}
