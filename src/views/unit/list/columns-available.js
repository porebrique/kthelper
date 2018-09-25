import React from 'react';
import { Button } from 'src/components';
import commonColumns from './columns-common';

const decorators = {
  actions: ({ row, controller }) => {
    const  { key } = row;
    const { onAdd } = controller.props;
    const onClick = onAdd ? onAdd.bind(null, key) : () => {};
    return (
      <div>
        <Button onClick={onClick}>Add</Button>
      </div>
    );
  } 
}

const columns = [
  { 
    key: 'unitName',
    name: 'Name'
  },
  ...commonColumns,
  { 
    key: 'max',
    name: 'Max'
  },
  {
    key: 'actions',
    decorator: decorators.actions
  }
];

export default columns;
