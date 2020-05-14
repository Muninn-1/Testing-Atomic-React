import React from 'react';
import PropTypes from 'prop-types';

import * as icons from '../../../assets/icons/index';
import styles from './Icon.module.css';


const Icon = ({ icon, ...props }) => ( 
    <img 
        src={icons[icon] || icons.jest} 
        alt={icon} 
        {...props}
    /> 
);

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
};

Icon.defaultProps = {
    className: '',
    icon: 'arc'
};

export default Icon;
