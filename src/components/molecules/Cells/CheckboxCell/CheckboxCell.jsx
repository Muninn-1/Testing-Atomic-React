import React from 'react';
import PropTypes from 'prop-types';

// Components
import TableCell from 'components/atoms/TableCell';
import CustomCheckbox from 'components/molecules/CustomCheckbox';

function CheckboxCell({ children, ...props }) {

    function onClick(e) {
        e.stopPropagation();
    }    

    const finalProps = children ? { label: children, ...props } : { ...props };

    return (
        <TableCell>
            <CustomCheckbox {...finalProps}/>
        </TableCell>
    );
}

CheckboxCell.propTypes = {
    heading: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    mode: PropTypes.string,
    children: PropTypes.node
}

CheckboxCell.defaultProps = {
    heading: false,
    disabled: false
}

export default CheckboxCell;