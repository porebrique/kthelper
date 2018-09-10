import React from 'react';
import { Button } from 'src/components';

export default class extends React.PureComponent {


  render() {
    const { onStart } = this.props;
    return (
      <div className="game-controls">
        <Button onClick={onStart}>Start</Button>
      </div>
    );
  }
}
