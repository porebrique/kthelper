import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Button } from 'src/components';

export default class extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // TODO: define array properly
    units: PropTypes.array.isRequired
  };

  renderUnit(unit) {
    return <div key={unit.name} className="unit">{unit.name}</div>;
  }

  renderEditButton() {
    const props = {
        component: props => <Link to="/teams/1/edit" {...props} />
    }
    
    return <Button {...props}>Edit</Button>;
  }

  render() {
    const { name, units } = this.props;
    const renderedUnits = units.map(this.renderUnit);
    const editButton = this.renderEditButton();
    return (
        <div className="team">
            <div className="wrapper">
                <div className="team-name">{name}</div>
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
