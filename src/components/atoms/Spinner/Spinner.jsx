import React from 'react'
import PropTypes from 'prop-types';

import styles from './Spinner.module.css';
import { HEX_SKY_BLUE, HEX_VERY_LIGHT_PINK } from 'constants/styles/colors/hexa/colors';


const Spinner = ({ primaryColor, secondaryColor, size, thickness, speed, animationTimingFunction }) => {
    const style = {
        borderColor: primaryColor,
        borderWidth: `${thickness}em`,
        borderTopColor: secondaryColor,
        width: `${size}em`,
        height: `${size}em`,
        animationDuration: `${speed}s`,
        animationTimingFunction
    };

    return( <div style={style} className={styles.spinner}/> );
}

Spinner.propTypes = {
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number,
    speed: PropTypes.number,
    animationTimingFunction: PropTypes.string
};

Spinner.defaultProps = {
    primaryColor: HEX_VERY_LIGHT_PINK,
    secondaryColor: HEX_SKY_BLUE,
    size: 1,
    thickness: 0.2,
    speed: 2,
    animationTimingFunction: 'ease-in-out'
};

export default Spinner;
