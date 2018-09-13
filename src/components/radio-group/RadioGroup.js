import React from 'react';
import * as lodash from 'lodash';
import classnames from 'classnames';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './style.scss';

export default class extends React.PureComponent {


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
    const { options, name, className, inline = true } = this.props;
    const groupProps = {
      name,
      value: this.getCurrentValue(),
      onChange: this.onChange,
      className: classnames(className, 'kth-radio-group', { inline }),
    };
    const renderedOptions = options.map(this.renderOption);
    return (
      <RadioGroup {...groupProps}>
        {renderedOptions}
      </RadioGroup>
    )
  }
}
