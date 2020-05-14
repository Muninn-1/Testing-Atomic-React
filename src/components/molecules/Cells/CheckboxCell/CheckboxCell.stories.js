import React from 'react';
import CheckboxCell from '.';

export default { title: 'molecules/Cells/CheckboxCell' };


export const CustomCheckboxCell = () => ( 
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <CheckboxCell heading name='checkbox01'/>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <CheckboxCell name='checkbox02'/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);


export const DisabledCheckboxCell = () => ( 
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <CheckboxCell heading name='checkbox01' disabled/>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <CheckboxCell name='checkbox02' disabled/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);

export const DarkCheckboxCell = () => ( 
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <CheckboxCell heading name='checkbox01' mode='dark'/>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <CheckboxCell name='checkbox02' mode='dark'/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);


export const SwitchCell = () => ( 
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <CheckboxCell heading name='checkbox01' mode='switch'/>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <CheckboxCell name='checkbox02' mode='switch'/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);