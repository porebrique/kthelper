import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  render() {
    const { children } = this.props;
    
    return (
      <div className="App">
        {children}
      </div>
    );
  }
}

export default App;
