import React from 'react';
import { Link } from 'react-router';
import GameControls from './GameControls';
import './style.scss';

export default class extends React.PureComponent {

  renderTitle() {
    const { title } = this.props;
    const props = {
      children: title,
      to: '/'
    }

    return <Link {...props} />;
  }

  renderGameControls() {
    const { gameControls } = this.props;
    const { onGameStart, game } = gameControls;
    const props = {
      // Spreading is required to create new object, otherwise component won't update
      game: { ...game },
      onStart: onGameStart
    };
    return <GameControls {...props} />;
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
            {this.renderGameControls()}
        </div>
        <div className="page-content">
          {children}
        </div>        
      </div>
    );
  }
}
