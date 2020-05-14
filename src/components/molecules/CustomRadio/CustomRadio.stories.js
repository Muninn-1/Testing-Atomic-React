import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Radio from '.';


export default { 
    title: 'molecules/Custom Radio',
    decorators: [withKnobs]
};

export const lightRadio = () => ( <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '75px'}}>
    <Radio name='gender' label='Male' />
    <Radio name='gender' label='Female' />
    <Radio name='gender' label='Unkown' />
</div>)

export const darkRadio = () => ( <Radio name='field' label='Gender' darkMode />)

export const DisableRadio = () => ( <Radio name='field' label='Gender' disabled />)