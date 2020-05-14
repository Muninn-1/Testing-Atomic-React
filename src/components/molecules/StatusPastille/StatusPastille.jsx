// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Pastille } from 'components/atoms';

// Constants
import { STATUS_COLORS, STATUS, PENDING } from 'constants/constants';

// Styles
// import styles from './StatusPastille.module.css';


function StatusPastille({ status }) {
    if(status && Object.values(STATUS).some(_status => status === _status )) {
        const color = STATUS_COLORS[status];
        const hasBorder = status === STATUS[PENDING]
        
        return ( <Pastille color={color} hasBorder={hasBorder}/> );
    }
    else {
        return ( <Pastille color={STATUS_COLORS[PENDING]} hasBorder={true}/> );
    }
};

StatusPastille.propTypes = { status: PropTypes.string };

StatusPastille.defaultProps = { status: PENDING};

export default StatusPastille;
