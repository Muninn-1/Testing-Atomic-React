import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_WIDTH } from 'constants/styles/styles';
import { multiplicateFontSize, addClassNames, removeClassNamesProps } from 'utils/utils';
import styles from './Input.module.css';

const ALTERNATIVE_INPUTS = ['textarea', 'select', 'radio', 'checkbox'];

const Input = ({ xWidth, xFontSize, ...props }) => {
    const { type } = props;
    const fontSize = multiplicateFontSize(xFontSize);
    const width = `${ xWidth * DEFAULT_WIDTH }vw`;
    const classe = `${ALTERNATIVE_INPUTS.includes(type) ? styles[type] : styles.default} ${addClassNames( styles, props )}`
    const style = ALTERNATIVE_INPUTS.includes(type) ? { fontSize } : { fontSize, width };

    switch(type) {
        case 'textarea': 
            return ( <textarea { ...removeClassNamesProps(props)} style={style} className={classe} /> );
        case 'select':
            return ( <select { ...removeClassNamesProps(props)} style={style} className={classe} /> );
        default:
            return ( <input { ...removeClassNamesProps(props)} style={style} className={classe} /> );
    }
};

Input.propTypes = {
    xWidth: PropTypes.number,
    xFontSize: PropTypes.number,
    type: PropTypes.string,
    borderless: PropTypes.bool,
    invalid: PropTypes.bool
};

Input.defaultProps = {
    xWidth: 1,
    xFontSize: 1,
    type: 'text',
    borderless: false,
    invalid: false
};

export default Input;
