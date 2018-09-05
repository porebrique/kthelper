import React from 'react';
import { BasePage } from 'src/views';


export default function basePage(options) {
  return function(Child) {

    return class extends React.Component {

      render() {
        const  { title } = options;
        return (
          <BasePage title={title}>
            <Child {...this.props} />
          </BasePage>
        );
      }
    }
  }

}
