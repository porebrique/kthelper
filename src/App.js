import React, { Component } from 'react';
import { Link } from 'react-router';
import * as lodash from 'lodash';
import './App.scss';

class App extends Component {

  getPageTitle() {
    const { routes } = this.props;
    const { pageTitle } = lodash.last(routes);
    return pageTitle;
  }

  renderTitle() {
    const props = {
      children: this.getPageTitle(),
      to: '/'
    }

    return <Link {...props} />;
  }

  render() {
    const { children } = this.props;
    
    const title = this.renderTitle();
    return (
      <div className="App">
        <div className="page-wrapper">
          <div className="page-header">
              <div className="page-title">
                  {title}
              </div>
          </div>
          <div className="page-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
