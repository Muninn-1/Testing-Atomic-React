import React from 'react'
import PropTypes from 'prop-types'

import { Label, Input, Icon } from 'components/atoms';

import styles from './Field.module.css';


const Field = ({ error, name, label, type, xWidth, font, ...props }) => {
    const inputProps = { id: name, name, type, xWidth, 'aria-describedby': `${name}Error`, ...props }
    const labelProps = {font, ...props }

    const { invalid } = props;
    return (
        <div className={styles.default}>
            {label && <Label htmlFor={inputProps.id} {...labelProps}>{label}</Label>}
            <Input {...inputProps} />
            {invalid && error&& (
                <span id={`${name}Error`} role="alert" palette="danger">
                    {error}
                </span>
            )}
        </div>
    )
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    invalid: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
};

Field.defaultProps = { type: 'text' };

export default Field;
