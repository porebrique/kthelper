import React from 'react';
import { Link } from 'react-router';

export default class extends React.PureComponent {

  renderTitle() {
    const { title } = this.props;
    const props = {
      children: title,
      to: '/'
    }

    return <Link {...props} />;
  }

  render() {
    const { children } = this.props;
    const title = this.renderTitle();
    
    return (
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
    );
  }
}
