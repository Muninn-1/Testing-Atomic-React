import React from 'react';
import TextCell from '.';

export default { title: 'molecules/Cells/TextCell' };


export const NoData = () => ( 
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <TextCell heading />
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <TextCell/>
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
                <TextCell heading data="Prénom Nom"/>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <TextCell data="Hello World"/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);

export const WithArrayData = () => ( 
    <table style={{borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <TextCell heading data={["Prénom", "Nom"]}/>
                <th>Heading Cell 2</th>
                <th>Heading Cell 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <TextCell data={["Hello There", "General Kenobi"]}/>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
);