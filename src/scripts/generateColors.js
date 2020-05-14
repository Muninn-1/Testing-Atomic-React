const colors = require('../constants/styles/colors/colors.json');
const PropTypes = require('prop-types');
const fs = require('fs');

const HEADER_WARNING = `/*\n\nWARNING : DON'T MANUALLY ADD COLORS IN THIS FILE!!\n-> Add them in 'constants/styles/colors/colors.json'\n-> Run script 'yarn g-c-f' !!\n\n*/`;



const formatJsFileColorName = name => name.toUpperCase().replace(new RegExp('-','g'), '_');

formatJsFileColorName.propTypes = { name: PropTypes.string.isRequired };


function convertHexToRGB(code) {
    const hex = code.replace('#','');
    return `${parseInt(hex.substring(0,2), 16)}, ${parseInt(hex.substring(2,4), 16)}, ${parseInt(hex.substring(4,6), 16)}`;
};

convertHexToRGB.propTypes = { code:  PropTypes.string.isRequired };



/**
 * function to write the body of colors' constants files
 * @param data : contains color name (key) and format code (value)
 * @param extension : extension of the final file ('css' or 'js')
 * @param format : the format of color code ('hex' or 'rgb')
 */
const generateColorFile = (data, extension, format) => {
    const finalData = {};

    Object.entries(data).forEach(function([name, code]) {
        const finalName = extension === 'js' ? formatJsFileColorName(name) : name;
        const finalCode = format === 'rgb' ? convertHexToRGB(code) : code;

        finalData[finalName] = finalCode;
    })


    
    return Object.entries(finalData).map(function([name, code]) {
        switch(extension) {
            case 'css': {
                return `@value ${format}-${name}: ${code};`;
            }
            case 'js': 
            default: {
                return `export const ${format.toUpperCase()}_${name} = '${code}';`;
            }
        }
    }).join('\n');
};

generateColorFile.propTypes = {
    data: PropTypes.object.isRequired,
    extension: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired
}





// Write Hexa files
fs.writeFile('src/constants/styles/colors/hexa/colors.css', `${HEADER_WARNING}\n\n${generateColorFile(colors, 'css', 'hex')}` , function (err) {
    if (err) throw err;
    console.log('hexa/colors.css Saved!');
});

fs.writeFile('src/constants/styles/colors/hexa/colors.js', `${HEADER_WARNING}\n\n${generateColorFile(colors, 'js', 'hex')}` , function (err) {
    if (err) throw err;
    console.log('hexa/colors.js Saved!');
});


// Write RGB files
fs.writeFile('src/constants/styles/colors/rgb/colors.css', `${HEADER_WARNING}\n\n${generateColorFile(colors, 'css', 'rgb')}` , function (err) {
    if (err) throw err;
    console.log('rgb/colors.css Saved!');
});

fs.writeFile('src/constants/styles/colors/rgb/colors.js', `${HEADER_WARNING}\n\n${generateColorFile(colors, 'js', 'rgb')}` , function (err) {
    if (err) throw err;
    console.log('rgb/colors.js Saved!');
});