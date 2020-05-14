// Modules
import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

// Components
import DateCell from '.';

// Constants
import { DD_MM_YEAR } from 'constants/constants';

export default { 
    title: 'molecules/Cells/DateCell',
    decorators: [withKnobs]
};

export const DateCellWithoutData = () => ( 
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
                <DateCell/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table> 
);

export const DateCellWithData = () => ( 
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
                <DateCell data="1983-05-31T00:00:00+02:00"/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table> 
);

export const CustomFormatDateCell = () => ( 
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
                <DateCell data="1983-05-31T00:00:00+02:00" format={DD_MM_YEAR} />
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table> 
);