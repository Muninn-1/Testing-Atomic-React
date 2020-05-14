import React from 'react';
import TableRow from '.';
import { HEX_DARK_GRAY, HEX_VERY_LIGHT_PINK } from 'constants/styles/colors/hexa/colors';

export default { title: 'atoms/TableRow' };


export const DefaultTableRows = () => ( 
    <table style={{borderCollapse: "collapse"}}>
        <thead>
            <TableRow>
                <th>Heading Cell 1</th>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </TableRow>
        </thead>
        <tbody>
            <TableRow backgroundColor={HEX_DARK_GRAY}>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </TableRow>
            <TableRow underlineColor={HEX_VERY_LIGHT_PINK} underlineStyle='solid'>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </TableRow>
            <TableRow underlineColor={HEX_VERY_LIGHT_PINK} underlineStyle='double'>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </TableRow>
        </tbody>
    </table>
);
