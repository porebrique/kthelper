import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import GridRow from './GridRow';
import { columnProp } from './props';

export default class extends GridRow {

  static propTypes = {
    columns: PropTypes.arrayOf(columnProp).isRequired
  };

  renderCell(column) {
    const { key, name } = column;
    const columnName = name || key;
    const props = {
      key,
      children: columnName
    }
    return <TableCell {...props} />;
  }

}