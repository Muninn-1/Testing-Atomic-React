import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Label from '.';
import { SECONDARY_FONT } from 'constants/styles/fonts/fonts';


export default { 
    title: 'atoms/Label',
    decorators: [withKnobs]
};

export const DefaultLabel = () => ( <Label>{text('text', 'Hello World' )}</Label> );

export const secondaryFontLabel = () => ( <Label font={text('font', SECONDARY_FONT)}>{text('text', 'Hello World' )}</Label>)

export const xFontSizeLabel = () => ( <Label xFontSize={number('xFontSize', 2)}>{text('text', 'Hello World' )}</Label> );

export const InvalidLabel = () => ( <Label invalid >{text('text', 'Hello World' )}</Label> );