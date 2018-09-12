import React from 'react';
import * as lodash from 'lodash';
import Unit from './unit';

export default class extends React.Component {


  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'renderUnit'
    ]);
  }


  onSelectMovementType(type) {
    console.log('selected movement:', type)
    // TODO:
  }

  renderUnit(unit) {
    const props = {
      key: unit.uid,
      unit,
      onSelectMovementType: this.onSelectMovementType
    };
    return <Unit {...props} />;
  }

  renderTeam(team) {
    const renderedUnits = team.units.map(this.renderUnit);
    return renderedUnits;
  }

  render() {
    const { game } = this.props;
    const teamA = game.teams[0];
    const renderedTeam = this.renderTeam(teamA);

    return (
      <div>
        <h4>Movement phase placeholder</h4> 
        <div>
          {renderedTeam}
        </div>
      </div>
    );
  }
}
