import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { columnProp } from './props';

export default class extends React.PureComponent {

  static propTypes = {
    columns: PropTypes.arrayOf(columnProp).isRequired,
    row: PropTypes.object.isRequired
  };

  static decorators = {
    default: ({ cell }) => cell
  }

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'renderCell'
    ]);
  }

  getDecorator(column) {
    const { decorators } = this.constructor;
    const { type, decorator } = column;
    return decorator || decorators[type] || decorators.default;
  }

  renderCell(column) {
    const { row } = this.props;
    const data = row[column.key]
    const decorator = this.getDecorator(column);
    const props =  {
      numeric: true,
      key: column.key,
      children: decorator({ cell: data, row })
    };
    return <TableCell {...props} />;
  }

  render() {
    const { columns } = this.props;
    const cells = columns.map(this.renderCell);
    const props = {
      children: cells
    }
    return <TableRow {...props} />;
  }

}