import PropTypes from 'prop-types';
import UnitsList from './UnitsList';
import columns from './columns-available';

export default class extends UnitsList {

  static propTypes = {
    units: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired
  };

  getProps() {
    const { units, onAdd } = this.props;
    const items = units.map(unit => ({ ...unit, id: unit.key }));
    return {
      items,
      onAdd,
      columns
    };
  }

}
