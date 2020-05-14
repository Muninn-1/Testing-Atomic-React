import React from 'react';
import PropTypes from 'prop-types';

import styles from './TableRow.module.css';

const TableRow = ({ backgroundColor, underlineColor, underlineStyle, children }) => {
    return (
        <tr 
            style={{backgroundColor, borderBottomColor: underlineColor }}
            className={underlineColor !== '' ? styles[underlineStyle] : null}
        >
            {children}
        </tr>
    );
};

TableRow.propTypes = {
    backgroundColor: PropTypes.string,
    underlineColor: PropTypes.string,
    children: PropTypes.node.isRequired
};

TableRow.defaultProps = {
    backgroundColor: 'tranparent',
    underlineColor: '',
    underlineStyle: 'solid'
};

export default TableRow;
