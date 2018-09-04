import React from 'react';
import { UnitSummary } from 'src/views'

export default class extends React.PureComponent {

    renderUnit(unit) {
        const props = {
            key: unit.name,
            ...unit
        };
        return <UnitSummary {...props} />;
    }

    render() {
        const { name, units } = this.props;
        const unitsRendered = units.map(this.renderUnit);

        return (
            <div>
                <h2>{name}</h2>
                <div className="units">
                    {unitsRendered}
                </div>
            </div>
        );
    }
}
