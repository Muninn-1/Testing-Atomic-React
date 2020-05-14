import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Spinner from '.';

import { HEX_SKY_BLUE, HEX_PINKISH_RED } from 'constants/styles/colors/hexa/colors';


export default { 
    title: 'atoms/Spinner',
    decorators: [withKnobs]
};

export const DefaultSpinner = () => ( <Spinner/> );

export const CustomSpinner = () => ( 
    <Spinner 
        primaryColor={text('primaryColor', HEX_SKY_BLUE)}
        secondaryColor={text('secondaryColor', HEX_PINKISH_RED)}
        size={number('size', 2)}
        thickness={number('thickness', 0.5)}
        speed={number('speed', 2)}
        animationTimingFunction={text('animationTimingFunction', 'ease-in')}
    />
);