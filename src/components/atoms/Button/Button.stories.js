import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '.';

import { HEX_PINKISH_RED, HEX_DEEP_GREEN, HEX_DARK_BLACK, HEX_GREEN_XPLOSION } from 'constants/styles/colors/hexa/colors';

export default { 
  title: 'atoms/Button',
  decorators: [withKnobs]
};

export const DefaultButton = () => (
  <>
    <Button onClick={action('button-click')} xFontSize={number('xFontSize', 1)} >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_GREEN_XPLOSION} xFontSize={number('xFontSize', 1)} >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_PINKISH_RED} xFontSize={number('xFontSize', 1)} >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_DEEP_GREEN} xFontSize={number('xFontSize', 1)} >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_DARK_BLACK} xFontSize={number('xFontSize', 1)} >{text('text', 'Default')}</Button>
  </>
);

export const TransparentButton = () => ( 
  <>
    <Button onClick={action('button-click')} transparent >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_GREEN_XPLOSION} transparent >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_PINKISH_RED} transparent >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_DEEP_GREEN} transparent >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} color={HEX_DARK_BLACK} transparent >{text('text', 'Default')}</Button>
  </>
);

export const DisabledButtons = () => ( 
  <>
    <Button onClick={action('button-click')} disabled transparent >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button onClick={action('button-click')} disabled >{text('text', 'Default')}</Button>
  </>
);

export const AnchorButton = () => (
  <>
    <Button href={text('href', 'https://www.google.com')} transparent >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button href={text('href', 'https://www.google.com')} >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button href={text('href', 'https://www.google.com')} transparent color={HEX_PINKISH_RED} >{text('text', 'Default')}</Button>
    <br/><br/>
    <Button href={text('href', 'https://www.google.com')} color={HEX_DEEP_GREEN} >{text('text', 'Default')}</Button>
  </>
);