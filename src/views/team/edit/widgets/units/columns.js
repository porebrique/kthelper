import React from 'react';
import { Button } from 'src/components';
import unitGridColumns from './unit/unitGridColumns';

const decorators = {
  edit: () => {
    return (
      <div>
        <Button>Edit</Button>
      </div>
    );
  },
  remove: () => {
    return (
      <div>
        <Button>Delete</Button>
      </div>
    );
  }  
}

const columns = [
  { 
    key: 'name'
  },
  ...unitGridColumns,
  {
    key: 'weapons'
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
