import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import classnames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './styles.scss';

export default class CheckBox extends React.PureComponent {

  static propTypes = {
    value: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    color: PropTypes.string,
    inline: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    color: 'primary',
    inline: false
  };

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
        'onChange'
    ]);
  }

  onChange(event, isChecked) {
    const { value, onChange } = this.props;
    onChange(value, isChecked);
  }

  render() {
    const { checked, name, color, inline } = this.props;
    const checkboxProps = {
      checked,
      onChange: this.onChange,
      color
    };
    const wrapperProps = {
     label: name,
     control: <Checkbox {...checkboxProps}/>
    }    
    const className = classnames('kth-checkbox', { inline });
   
    return (
      <div className={className}>
        <FormControlLabel {...wrapperProps} />      
      </div>
    );
  }

}