import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './IconButton';

import { HEX_PINKISH_RED, HEX_DEEP_GREEN, HEX_DARK_BLACK, HEX_GREEN_XPLOSION, HEX_WINDOWS_BLUE } from 'constants/styles/colors/hexa/colors';

export default { 
  title: 'molecules/IconButton',
  decorators: [withKnobs]
};

export const DefaultIconButton = () => (
  <>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      icon={text('icon', 'Default')}
      height={number('height', 25)}
    >
      {text('text', 'Default')}
    </Button>
  </>
);

export const RightIconButton = () => (
  <>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      icon='atomicDesign'
      height={number('height', 25)}
      right
    >
      {text('text', 'Default')}
    </Button>
  </>
);

export const TransparentIconButton = () => (
  <>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      icon='atomicDesign'
      height={number('height', 25)}
      transparent
    >
      {text('text', 'Default')}
    </Button>
  </>
);

export const ColoredIconButton = () => (
  <>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      color={HEX_PINKISH_RED} 
      icon='google'
      height={number('height', 25)}
    >
      {text('text', 'Default')}
    </Button>
    <br/><br/>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      color={HEX_DEEP_GREEN} 
      icon='reactRouter'
      height={number('height', 25)}
    >
      {text('text', 'Default')}
    </Button>
    <br/><br/>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      color={HEX_DARK_BLACK} 
      icon='webpack'
      height={number('height', 25)}
    >
      {text('text', 'Default')}
    </Button>
    <br/><br/>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      color={HEX_GREEN_XPLOSION} 
      icon='arc'
      height={number('height', 25)}
    >
      {text('text', 'Default')}
    </Button>
    <br/><br/>
    <Button 
      onClick={action('button-click')}
      xFontSize={number('xFontSize', 1)}
      color={HEX_WINDOWS_BLUE}
      icon='dist'
      height={number('height', 25)}
    >
      {text('text', 'Default')}
    </Button>
  </>
);