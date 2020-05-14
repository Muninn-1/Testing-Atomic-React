// Modules
import React from 'react';
// import { withKnobs, text, number } from '@storybook/addon-knobs';
import StatusPastille from '.';

export default { 
    title: 'molecules/StatusPastille',
    // decorators: [withKnobs]
};

export const DefaultStatusPastille = () => ( <StatusPastille /> );

export const StatusPastilles = () => (
    <>
        <span>pending</span> <StatusPastille status="pending" />
        <span>in_progress</span> <StatusPastille status="in_progress" />
        <span>cancelled</span> <StatusPastille status="cancelled" /> 
        <span>refused</span> <StatusPastille status="refused" /> 
        <span>validated</span> <StatusPastille status="validated" /> 
    </>
);


export const WrongStatusName = () => ( <StatusPastille status="lalilulelo" /> );