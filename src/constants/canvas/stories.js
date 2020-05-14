module.exports = (subDir, component) => (`// Modules
import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

// Components
import ${component} from '.';

// Constants

export default { 
    title: '${subDir}/${component}',
    decorators: [withKnobs]
};

export const Default${component} = () => ( <${component} /> );
`);