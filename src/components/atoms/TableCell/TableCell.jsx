import React from 'react';
import PropTypes from 'prop-types';

import styles from './TableCell.module.css';

const TableCell = ({ heading, children }) => {
    return heading ? (
        <th className={styles.th}>
            {children}
        </th>
    ) : (
        <td className={styles.td}>
            {children}
        </td>
    );
}

TableCell.propTypes = {
    heading: PropTypes.bool,
    children: PropTypes.any,
}

TableCell.defaultProps = {
    heading: false
}

export default TableCell
