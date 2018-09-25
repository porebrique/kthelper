import React from 'react';
import { Button } from 'src/components';
import commonColumns from './columns-common';

const decorators = {
  weapons: ({ cell }) => {
    const renderedWeapons = cell.map(weapon => <div key={weapon.id}>{weapon.name}</div>)
    return <div>{renderedWeapons}</div>;
  },
  edit: () => {
    return (
      <div>
        <Button>Edit</Button>
      </div>
    );
  },
  remove: ({ row, controller }) => {
    const { onRemove } = controller.props;
    const props = {
      onClick: () => onRemove(row.id)
    }
    return (
      <div>
        <Button {...props}>Delete</Button>
      </div>
    );
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
