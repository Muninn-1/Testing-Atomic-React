import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from 'components/atoms';

import styles from './CustomCheckbox.module.css';


const Field = ({ mode, name, label, xWidth, font, ...props }) => {
    const inputProps = { id: name, name, type : 'checkbox', xWidth, 'aria-describedby': `${name}Error`, ...props }
    const labelProps = {font, ...props }
    console.log(props)
    return (
        <div className={styles[mode]}>
            <Input {...inputProps}/>
            <Label htmlFor={inputProps.id} {...labelProps}>{label}</Label>
        </div>
    )
}

Field.propTypes = {
    mode: PropTypes.string,
    name: PropTypes.string.isRequired,
    invalid: PropTypes.bool,
    label: PropTypes.string
};

Field.defaultProps = { 
    mode: 'light',
    label: ''
};

export default Field;
