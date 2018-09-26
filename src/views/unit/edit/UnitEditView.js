import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import { Grid, Checkbox } from 'src/components';
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
            weapons: PropTypes.array.isrequired,
            weaponsAvailable: PropTypes.array.isrequired,
            weaponsComments: PropTypes.array
        }).isRequired,
        onWeaponChange: PropTypes.func.isRequired
    };

    constructor(props) {
      super(props);
      lodash.bindAll(this, [
          'renderWeapon'
      ]);
    }

    isWeaponSelected(weapon) {
        const { weapons } = this.props.unit;
        return lodash.includes(weapons, weapon);
    }

    toggleWeapon(weapon, isSelected) {
         this.props.onWeaponChange(weapon, isSelected)   ;
    }

    renderStats() {
      const { unit } = this.props;
      const props = {
        columns,
        items: [unit]
      };
      return <Grid {...props} />;
    }

    renderWeapon(weapon) {
        const props = {
            checked: this.isWeaponSelected(weapon),
            key: weapon.id,
            value: weapon,
            name: weapon.name,
            onChange: this.props.onWeaponChange
        };
        return <Checkbox {...props} />;
    };

    renderWeaponsComment(comment, index) {
        return <li key={index} className="weapon-comment">{comment}</li>;
    }
    
    render() {
        const { unit } = this.props;
        const stats = this.renderStats();
        const weapons = unit.weaponsAvailable.map(this.renderWeapon);
        const comments = unit.weaponsComments.map(this.renderWeaponsComment);
        return (
            <div className="kth-unit-edit">
                <div className="stats">
                    {stats}
                </div>

                <div className="weapons-list">
                    <div className="title">Weapons</div>
                    {weapons}
                </div>
                <ul className="weapons-comments">
                    {comments}
                </ul>
            </div>
        );
    }    

}
