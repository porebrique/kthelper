import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import TableCell from '@material-ui/core/TableCell';
import GridRow from './GridRow';
import { columnProp } from './props';

export default class extends GridRow {

  static propTypes = {
    columns: PropTypes.arrayOf(columnProp).isRequired
  };
  
  getName(column) {
    const { key, name } = column;
    return name || lodash.capitalize(key);
  }

  renderCell(column) {
    const { key } = column;
    const columnName = this.getName(column);
    const props = {
      key,
      children: columnName
    }
    return <TableCell {...props} />;
  }

}