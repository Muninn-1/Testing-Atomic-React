import React from 'react';
import Field from '.';

export default { 
    title: 'molecules/Field'
};

export const DefaultField = () => ( <Field name='field' /> );

export const WithLabelField = () => ( <Field name='field' label='Name' /> );