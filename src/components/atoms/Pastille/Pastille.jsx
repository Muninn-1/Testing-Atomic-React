// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components

// Constants

// Styles
import styles from './Pastille.module.css';


const Pastille = ({color, hasBorder}) => ( 
    <div className={hasBorder ? styles.borderedContainer : styles.container} style={{backgroundColor: color}} />
);

Pastille.propTypes = {
    color: PropTypes.string.isRequired,
    hasBorder: PropTypes.bool
};

Pastille.defaultProps = {
    hasBorder: false
}

export default Pastille;
