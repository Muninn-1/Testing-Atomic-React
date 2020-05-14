import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { multiplicateFontSize, brightnessByColor } from 'utils/utils';
import { HEX_SKY_BLUE, HEX_WHITE, HEX_DARK_BLACK } from 'constants/styles/colors/hexa/colors';


import styles from './Button.module.css';

const Button = ({ children, type, transparent, xFontSize, color, ...props }) => {
  const { to, href, disabled } = props;
  const fontSize =  multiplicateFontSize(xFontSize);
  const style = transparent ?
    { fontSize, color, borderColor: color}
  : 
    {fontSize, backgroundColor: color, borderColor: color, color: brightnessByColor(color) < 125 ? HEX_WHITE : HEX_DARK_BLACK };

  if (to) {
    return ( 
      <Link className={styles.link} style={disabled ? {} : style} {...props}>
        {children}
      </Link> 
    );
  } 
  if (href) {
    return (
      <a 
        className={`${styles.anchor} ${transparent ? styles.transparent : styles.opaque}`}
        style={disabled ? {} : style}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <button 
      className={`${styles.button} ${transparent ? styles.transparent : styles.opaque}`}
      style={disabled ? {} : style}
      type={type}
      {...props} 
    >
      {children}
    </button>
  )
};

Button.propTypes = {
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  xFontSize: PropTypes.number,
  children: PropTypes.node
};

Button.defaultProps = {
  type: 'button',
  xFontSize: 1,
  color: HEX_SKY_BLUE
};

export default Button;
