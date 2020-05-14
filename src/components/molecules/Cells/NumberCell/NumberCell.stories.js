import React from 'react';
import NumberCell from '.';

export default { title: 'molecules/Cells/NumberCell' };


export const NoData = () => ( 
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
                <NumberCell/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);

export const WithData = () => ( 
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
                <NumberCell data={14}/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);