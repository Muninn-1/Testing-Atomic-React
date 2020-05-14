import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Input from '.';

export default { 
    title: 'atoms/Input',
    decorators: [withKnobs]
};

export const DefaultInput = () => ( <Input /> );

export const MailInput = () => ( <Input type={text('input type', 'mail')}/> );

export const XWidthInput = () => ( <Input xWidth={number('xWidth', 2)} /> );

export const XFontSizeInput = () => ( <Input xFontSize={number('xFontSize', 1.5)} /> );

export const TransparentInput = () => ( <Input transparent /> );

export const InvalidInput = () => ( <Input invalid /> );

export const ReadOnlyInput = () => ( <Input readOnly /> );

export const DisabledInput = () => ( <Input disabled /> );

export const Textarea = () => ( <Input type='textarea' transparent /> );

export const Checkbox = () => ( <Input type='checkbox' /> );

export const Radio = () => ( <Input type='radio' name='group1' value='something' /> );

export const Select = () => ( 
    <Input type="select">
        <option>{text('first option', 'Option 1')}</option>
        <option>{text('second option', 'Option 2')}</option>
        <option>{text('third option', 'Option 3')}</option>
        <option>{text('fourth option', 'Option 4')}</option>
        <option>{text('fifth option', 'Option 5')}</option>
    </Input> 
);

export const MultipleSelect = () => ( 
    <Input type="select" multiple autocomplete size={3}>
        <option>{text('first option', 'Option 1')}</option>
        <option>{text('second option', 'Option 2')}</option>
        <option>{text('third option', 'Option 3')}</option>
        <option>{text('fourth option', 'Option 4')}</option>
        <option>{text('fifth option', 'Option 5')}</option>
    </Input> 
);