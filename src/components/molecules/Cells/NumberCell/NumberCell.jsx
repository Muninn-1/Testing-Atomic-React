import React from 'react';
import PropTypes from 'prop-types';

// Components
import { TableCell } from 'components/atoms';

// Constants
import { EMPTY_CONTENT_CELL } from 'constants/constants';




const NumberCell = ({ data, ...props }) => ( <TableCell {...props}>{ data || EMPTY_CONTENT_CELL }</TableCell> );

NumberCell.propTypes = { data: PropTypes.number };

export default NumberCell;