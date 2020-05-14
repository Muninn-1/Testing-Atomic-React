// Modules
import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import StatusCell from '.';

export default { 
    title: 'molecules/Cells/StatusCell',
    decorators: [withKnobs]
};

export const StatusCellWithoutData = () => (
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <th>Heading Cell 1</th>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <StatusCell />
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);

export const StatusCellWithData = () => (
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <th>Heading Cell 1</th>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <StatusCell data={text('data(status)','in_progress')}/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);
