import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Icon from './Icon';

export default { 
    title: 'atoms/Icon',
    decorators: [withKnobs]
};

export const DefaultIcon = () => ( <Icon /> );

export const Arc = () => ( <Icon icon='arc' height={number('height', 75)} /> );

export const AtomicDesign = () => ( <Icon icon='atomicDesign' height={number('height', 75)}/> );

export const Heart = () => ( <Icon icon='heart' /> );

export const ReactJs = () => ( <Icon icon='react' height={number('height', 75)} /> );

export const Redux = () => ( <Icon icon='redux' height={number('height', 75)} /> );