// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import TableCell from 'components/atoms/TableCell';
import StatusPastille from 'components/molecules/StatusPastille';

// Constants
import { EMPTY_CONTENT_CELL } from 'constants/constants';

// Styles
import styles from './StatusCell.module.css';


function StatusCell({ data, ...props }) {
    return (
        <TableCell {...props}>
            {data ? (
                <div className={styles.cellContent}>
                    <StatusPastille status={data}/> 
                    <span>{data}</span>
                </div>
            ) : (
                EMPTY_CONTENT_CELL
            )}
        </TableCell>
    );
};

StatusCell.propTypes = {
    props: PropTypes.object
};

StatusCell.defaultProps = {
};

export default StatusCell;
