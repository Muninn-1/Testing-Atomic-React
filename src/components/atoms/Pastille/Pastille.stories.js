import React from 'react';
// import { withKnobs, text, number } from '@storybook/addon-knobs';
import Pastille from '.';

export default { 
    title: 'atoms/Pastille',
    // decorators: [withKnobs]
};

export const DefaultPastille = () => (
    <>
        <Pastille color="red" />
        <Pastille color="blue" />
        <Pastille color="green" />
        <Pastille color="yellow" />
        <Pastille color="gray" />
    </>
);

export const BorderedPastille = () => ( <Pastille hasBorder color="white"/> );