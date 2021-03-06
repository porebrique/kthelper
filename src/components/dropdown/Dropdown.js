import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import * as lodash from 'lodash';
import './style.scss';

const optionProp = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired
});

export default class extends React.PureComponent {

    static propTypes = {
        options: PropTypes.arrayOf(optionProp).isRequired,
        selectedOption: optionProp,
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

    getCurrentValue() {
        const { value } = this.props;
        const isObject = lodash.isObjectLike(value);
        return isObject ? value.id : value;
    }

    onChange(event, selectedOption) {
        const { props } = selectedOption;
        const { value: id, children: name } = props;
        this.props.onChange({ id, name });
    }

    renderOption(option) {
        const { id, name } = option;
        const props = {
            key: id,
            value: id,
            children: name
        };
        return <MenuItem {...props} />
    }

    render() {
        const { options, id, name } = this.props;
        const renderedOptions = options.map(this.renderOption);
    
        const labelProps = {
            'html-for': id,
            children: name
        };

        const selectProps = {
          value: this.getCurrentValue() || '',
          inputProps: { id, name },
          onChange: this.onChange,
          className: 'select',
          children: renderedOptions
        };
        return (
            <div className="kth-dropdown">
                <div className="label">
                    <InputLabel {...labelProps} />
                </div>
                <Select {...selectProps} />
            </div>
        );
      }
}
