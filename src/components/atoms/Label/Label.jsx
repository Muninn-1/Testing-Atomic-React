import React from 'react'
import PropTypes from 'prop-types';

import { multiplicateFontSize, addClassNames, removeClassNamesProps } from 'utils/utils';
import { PRIMARY_FONT } from 'constants/styles/fonts/fonts';
import styles from './Label.module.css';

const Label = ({font, children, xFontSize, ...props }) => ( 
    <label 
        style={{ fontSize: multiplicateFontSize(xFontSize), fontFamily: font  }}
        className={`${styles.default} ${addClassNames(styles, props)}`}
        { ...removeClassNamesProps(props)}
    >
        {children}
    </label>
);

Label.propTypes = {
    xFontSize: PropTypes.number,
    font: PropTypes.string,
    children: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    for: PropTypes.string
};

Label.defaultProps = {
    xFontSize: 1,
    font: PRIMARY_FONT
};

export default Label;
