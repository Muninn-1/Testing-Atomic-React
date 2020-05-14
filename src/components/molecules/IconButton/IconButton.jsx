import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'components/atoms';

import styles from './IconButton.module.css';

const IconButton = ({ children, right, icon, height, ...props }) => {
  const iconElement = ( <Icon icon={icon} height={height}/> );

  return (
    <Button {...props} >
      <div className={styles.wrapper}>
        {right || iconElement}
        <span className={right ? styles.left : styles.right}>{children}</span>
        {right && iconElement}
      </div>
    </Button>
  )
};

IconButton.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  icon: PropTypes.string.isRequired,
  right: PropTypes.bool,
};

IconButton.defaultProps = { };

export default IconButton;
