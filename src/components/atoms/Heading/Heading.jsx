import React from 'react'
import PropTypes from 'prop-types';

import { multiplicateFontSize } from 'utils/utils';
import { PRIMARY_FONT } from 'constants/styles/fonts/fonts';
import { HEX_DARK_BLACK } from 'constants/styles/colors/hexa/colors';
import styles from './Heading.module.css';

const FONTSIZE_MULTIPLICATOR_BY_PRIORITY = [ 5, 3, 2, 1, 1, 1 ];

const Heading = ({priority, fontFamily, children, color, xFontSize, ...props }) => {
    const HeadingElement =  `h${priority}`;
    const defaultFontSizeMultiplicator = FONTSIZE_MULTIPLICATOR_BY_PRIORITY[priority - 1];

    return ( 
        <HeadingElement 
            style={{ fontFamily, fontSize: multiplicateFontSize(xFontSize ? xFontSize : defaultFontSizeMultiplicator), color }}
            className={styles[`h${priority}`]}
            { ...props}
        >
            {children}
        </HeadingElement>
    );
}

Heading.propTypes = {
    children: PropTypes.string.isRequired,
    fontFamily: PropTypes.string,
    color: PropTypes.string,
    priority: PropTypes.number,
    xFontSize: PropTypes.number
};

Heading.defaultProps = {
    fontFamily: PRIMARY_FONT,
    color: HEX_DARK_BLACK,
    priority: 1
};

export default Heading;
