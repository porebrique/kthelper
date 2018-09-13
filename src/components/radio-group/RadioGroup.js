import React from 'react';
import PropTypes from 'prop-types';
import * as lodash from 'lodash';
import classnames from 'classnames';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './style.scss';

const optionProp = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired
});

export default class extends React.PureComponent {

  static propTypes = {
    selectedOption: optionProp,
    options: PropTypes.arrayOf(optionProp).isRequired,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    selectedOption: null
  };

  constructor(props) {
    super(props);
    lodash.bindAll(this, [
      'onChange'
    ]);
  }

  onChange(event, option) {
    const selectedOption = lodash.find(this.props.options, { id: option });
    this.props.onChange(selectedOption);
  }

  getCurrentValue() {
    const { selectedOption } = this.props;
    return selectedOption ? selectedOption.id : null;
  }

  renderOption(option) {
    const { id: value, name } = option;
    const props = {
      key: value,
      value,
      label: name,
      control: <Radio />
    }
    return <FormControlLabel {...props} />;
  }

  render() {
    const { options, className, inline = true } = this.props;
    const groupProps = {
      value: this.getCurrentValue(),
      onChange: this.onChange,
      className: classnames(className, 'kth-radio-group', { inline }),
      children: options.map(this.renderOption)
    };

    return <RadioGroup {...groupProps} />;
  }
}
