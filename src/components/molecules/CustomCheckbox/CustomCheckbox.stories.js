import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Checkbox from '.';


export default { 
    title: 'molecules/Custom Checkbox',
    decorators: [withKnobs]
};

export const NoLabelCheckbox = () => ( <Checkbox name='field' /> )

export const lightCheckbox = () => ( <Checkbox name='field' label='Gender' /> )

export const darkCheckbox = () => ( <Checkbox name='field' label='Gender' mode='dark' /> )

export const DisabledCheckbox = () => ( <Checkbox name='field' label='Gender' disabled /> )

export const Switch = () => ( <Checkbox name='field' label='Gender' mode='switch' /> )

export const DisabledSwitch = () => ( <Checkbox name='field' label='Gender' mode='switch' disabled /> )