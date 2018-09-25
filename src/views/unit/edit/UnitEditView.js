import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'src/components';
import columns from 'src/views/unit/list/columns-common';
import './style.scss';

export default class extends React.PureComponent {

    static propTypes = {
        unit: PropTypes.shape({
            name: PropTypes.string.isRequired,
            move: PropTypes.number.isRequired,
            weaponSkill: PropTypes.number.isRequired,
            ballisticSkill: PropTypes.number.isRequired,
            strength: PropTypes.number.isRequired,
            toughness: PropTypes.number.isRequired,
            wounds: PropTypes.number.isRequired,
            attacks: PropTypes.number.isRequired,
            leadership: PropTypes.number.isRequired,
            saves: PropTypes.number.isRequired,
            // TODO: define arrays properly
            // weaponsAvailable: PropTypes.array.isrequired,
            // wargearAvailable: PropTypes.array.isRequired            
        }).isRequired
    };

    renderStats() {
      const { unit } = this.props;
      const props = {
        columns,
        items: [unit]
      };
      return <Grid {...props} />;
    }

    renderWeapon(weapon) {
        return <div key={weapon.id} className="weapon">{weapon.name}</div>;
      };
    
    render() {
        const { unit } = this.props;
        const stats = this.renderStats();
        const weapons = unit.weapons.map(this.renderWeapon);
        return (
            <div className="kth-unit-edit">
                <div className="stats">
                    {stats}
                </div>

                <div className="weapons-list">
                    <div className="title">Weapons</div>
                    {weapons}
                </div>
            </div>
        );
    }    

}
