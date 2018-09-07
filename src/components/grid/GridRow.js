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

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'renderCell'
    ]);
  }

  renderCell(column) {
    const { row } = this.props;
    const data = row[column.key]
    const props =  {
      numeric: true,
      key: column.key,
      children: data
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