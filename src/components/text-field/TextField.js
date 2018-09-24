import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import * as lodash from 'lodash';
import './style.scss';

export default class extends React.PureComponent {

    static propTypes = {
        onChange: PropTypes.func
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        lodash.bindAll(this, [
          'onChange'
        ]);
      }

    onChange(event, selectedOption) {
        const { props } = selectedOption;
        const { value: id, children: name } = props;
        this.props.onChange({ id, name });
    }

    render() {
        const { id, name } = this.props;
    
        const labelProps = {
            'html-for': id,
            children: name
        };

        const props = {
          // value,
          ...this.props,
          inputProps: { id, name },
          onChange: this.onChange
        };

        return (
            <div className="kth-text-field">
                <div className="label">
                    <InputLabel {...labelProps} />
                </div>
                <TextField {...props}/>
            </div>
        );
      }
}
