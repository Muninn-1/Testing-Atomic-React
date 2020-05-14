import React from 'react';
import PropTypes from 'prop-types';
import colors from 'constants/styles/colors/colors.json'

import { Label, Input } from 'components/atoms';

import styles from './CustomRadio.module.css';


const Field = ({ darkMode, name, label, xWidth, font, ...props }) => {
    const inputProps = { id:label, name, type : 'radio', xWidth, 'aria-describedby': `${name}Error`, ...props }
    const labelProps = {font, ...props }
    console.log(colors)
    return (
        <div className={darkMode ? styles.dark : styles.light}>
            <Input {...inputProps}/>
            <Label htmlFor={inputProps.id} {...labelProps}>{label}</Label>
        </div>
    )
}

Field.propTypes = {
    darkMode: PropTypes.bool,
    name: PropTypes.string.isRequired,
    invalid: PropTypes.bool,
    label: PropTypes.string
};

Field.defaultProps = { 
    darkMode: false 
};

export default Field;
