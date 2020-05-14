import React from 'react';
import TableCell from '.';

export default { title: 'atoms/TableCell' };


export const DefaultTableCells = () => ( 
    <table style={{borderCollapse: "collapse"}}>
        <thead>
            <tr>
                <TableCell heading>Heading Cell 1</TableCell>
                <TableCell heading>Heading Cell 2</TableCell>
                <TableCell heading>Heading Cell 3</TableCell>
            </tr>
        </thead>
        <tbody>
            <tr>
                <TableCell>Cell 1</TableCell>
                <TableCell>Cell 2</TableCell>
                <TableCell>Cell 3</TableCell>
            </tr>
        </tbody>
    </table>
);
