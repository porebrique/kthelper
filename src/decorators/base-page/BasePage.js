import React from 'react';
import * as lodash from 'lodash';
import { BasePage } from 'src/views';


export default function basePage(options) {
  return function(Child) {

    return class extends React.Component {

      render() {
        const  { title } = options;
        const { gameControls = {} } = this.props;
        const props = lodash.omit(this.props, ['gameControls']);
        return (
          <BasePage title={title} gameControls={gameControls}>
            <Child {...props} />
          </BasePage>
        );
      }
    }
  }

}
