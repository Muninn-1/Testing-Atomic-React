// Modules
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';


// Components
import { TableCell } from 'components/atoms';

// Constants
import { EMPTY_CONTENT_CELL, DEFAULT_FORMAT } from 'constants/constants';



const DateCell = ({ data, format, ...props }) => {
    console.log("coucou1", moment.locale())
    // moment.locale('fr')
    // console.log("coucou2", moment.locale())
    // moment.locale('es')
    // console.log("coucou3", moment.locale())
    return ( 
        <TableCell {...props}>{data ? moment(data).format(format || DEFAULT_FORMAT) : EMPTY_CONTENT_CELL }</TableCell>
    );
};

DateCell.propTypes = { data: PropTypes.number };

export default DateCell;