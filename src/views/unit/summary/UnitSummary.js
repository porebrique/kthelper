import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class extends React.PureComponent {

    static proptypes = {
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
        weaponsAvailable: PropTypes.array.isrequired,
        wargearAvailable: PropTypes.array.isRequired
    };


    render() {
        const { name, weaponSkill } = this.props;
        return (
            <div className="kth-unit-summary">
                <div className="name">{name}</div>
                <div className="unit-props">
                    <span className="prop-title">WS</span>
                    <span className="prop-value">{weaponSkill}</span>
                </div>    
            </div>
        );
    }    

}
