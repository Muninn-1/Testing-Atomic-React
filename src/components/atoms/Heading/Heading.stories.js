import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Heading from '.';
import { SECONDARY_FONT } from 'constants/styles/fonts/fonts';
import { HEX_DEEP_GREEN } from 'constants/styles/colors/hexa/colors';


export default { 
    title: 'atoms/Heading',
    decorators: [withKnobs]
};

export const defaultHeading = () => ( <Heading>{text('text', 'Hello World' )}</Heading> );

export const CustomHeading = () => ( 
    <Heading 
        priority={number('priority', 1)}
        fontFamily={text('fontFamily', 'Alternate Gothic' )}
        xFontSize={number('xFontSize', 6)}
        color={HEX_DEEP_GREEN}
    >
        {text('text', 'Hello World' )}
    </Heading>
);

export const AllHeadings = () => ( 
    <>
        <Heading>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={2}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={3}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={4}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={5}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={6}>{text('text', 'Hello World' )}</Heading>
        <br/>
    </>
);

export const secondaryFontHeadings = () => (
    <>
        <Heading fontFamily={text('fontFamily', SECONDARY_FONT)}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={2} fontFamily={text('fontFamily', SECONDARY_FONT)}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={3} fontFamily={text('fontFamily', SECONDARY_FONT)}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={4} fontFamily={text('fontFamily', SECONDARY_FONT)}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={5} fontFamily={text('fontFamily', SECONDARY_FONT)}>{text('text', 'Hello World' )}</Heading>
        <br/>
        <Heading priority={6} fontFamily={text('fontFamily', SECONDARY_FONT)}>{text('text', 'Hello World' )}</Heading>
        <br/>
    </>
);