import React from 'react';
import { Button } from 'src/components';
import commonColumns from './columns-common';

const decorators = {
  weapons: ({ cell }) => {
    const renderedWeapons = cell.map(weapon => <div key={weapon.id}>{weapon.name}</div>)
    return <div>{renderedWeapons}</div>;
  },
  // TODO: move actions to a separate component to avoid binding
  edit: ({ row, controller }) => {
    const { onEdit } = controller.props;
    const onClick = onEdit.bind(null, row);
    return <Button onClick={onClick}>Edit</Button>;
  },
  remove: ({ row, controller }) => {
    const { onRemove } = controller.props;
    const props = {
      onClick: () => onRemove(row.id)
    }
    return <Button {...props}>Delete</Button>;
  }  
}

const columns = [
  {
    key: 'name'
  },
  ...commonColumns,
  {
    key: 'weapons',
    decorator: decorators.weapons
  },  
  {
    key: 'wargear'
  },
  {
    key: 'edit',
    name: ' ',
    decorator: decorators.edit
  },
  {
    key: 'remove',
    name: ' ',
    decorator: decorators.remove
  }    
];

export default columns;
