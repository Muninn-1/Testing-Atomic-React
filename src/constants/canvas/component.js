module.exports = (component) => (`// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components

// Constants

// Styles
import styles from './${component}.module.css';


function ${component}(props) {
    return (
        <>
        </>
    );
};

${component}.propTypes = {
    props: PropTypes.object
};

${component}.defaultProps = {
};

export default ${component};
`);