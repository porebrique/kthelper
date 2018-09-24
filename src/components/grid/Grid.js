import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import GridRow from './GridRow';
import GridRowHeader from './GridRowHeader';
import { columnProp } from './props';
import './style.scss';

export default class extends React.PureComponent {

  static propTypes = {
    columns: PropTypes.arrayOf(columnProp).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired
    })).isRequired
  };

  static defaultProps = {
    methods: {}
  }

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'renderRow'
    ]);
  }

  renderRow(row) {
    const { columns } = this.props;
    const key = row.id;
    const props = {
      key,
      row,
      controller: this,
      columns
    }
    return <GridRow {...props} />;
  }

  renderHeader() {
    const { columns } = this.props;
    const props = {
      columns
    };
    return (
      <TableHead>
        <GridRowHeader {...props} />
     </TableHead>
    )
  }

  render() {
    const { items } = this.props;

    const header = this.renderHeader();
    const renderedRows = items.map(this.renderRow);
    return (
       <Table className="kt-grid">
         {header}
         <TableBody>
          {renderedRows}
         </TableBody>
       </Table>
    );
  }
}