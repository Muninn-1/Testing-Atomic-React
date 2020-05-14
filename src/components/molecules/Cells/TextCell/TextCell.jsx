import React from 'react';
import PropTypes from 'prop-types';

// Components
import { TableCell } from 'components/atoms';

// Constants
import { EMPTY_CONTENT_CELL } from 'constants/constants';


const TextCell = ({ data, ...props }) => ( <TableCell {...props}>{ data ? Array.isArray(data) ? data.join(', ') : data : EMPTY_CONTENT_CELL }</TableCell>);

TextCell.propTypes = { data: PropTypes.string || PropTypes.array }

export default TextCell;
