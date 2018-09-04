import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Button } from 'src/components';

export default class extends React.PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // TODO: define array properly
    units: PropTypes.array.isRequired
  };

  getFaction() {
    const { faction = {} } = this.props;
    return faction.name || 'Faction is not defined';
  }

  renderUnit(unit) {
    return <div key={unit.name} className="unit">{unit.name}</div>;
  }

  renderEditButton() {
    const { id } = this.props;
    const url = `/teams/${id}/edit`
    const props = {
        component: props => <Link to={url} {...props} />
    }
    
    return <Button {...props}>Edit</Button>;
  }

  render() {
    const { name, units } = this.props;
    const renderedUnits = units.map(this.renderUnit);
    const editButton = this.renderEditButton();
    const faction = this.getFaction();
    return (
        <div className="team">
            <div className="wrapper">
                <div className="team-name">{name}</div>
                <div className="team-faction">{faction}</div>
                <div className="units">
                    {renderedUnits}
                </div>
                <div className="actions">
                    {editButton}
                </div>
            </div>
        </div>
    );
  }
}
