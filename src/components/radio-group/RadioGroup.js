import React from 'react';
import * as lodash from 'lodash';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class extends React.Component {


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
    const { options, name } = this.props;
    const groupProps = {
      name,
      onChange: this.onChange,
    };
    const renderedOptions = options.map(this.renderOption);
    return (
      <RadioGroup {...groupProps}>
        {renderedOptions}
      </RadioGroup>
    )
  }
}
