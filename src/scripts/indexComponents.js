const PropTypes = require('prop-types');
const fs = require('fs');

const HEADER_WARNING = `/*\n\nWARNING : DON'T MANUALLY WRITE IN THIS FILE!!\n-> Run script 'yarn index-components!!\n\n*/`;

const writeComponentFiles =  require('./writeComponentFiles.module');


const formatExportString = (path, component) => `export { default as ${component} } from './${path}';`

const result = {};

function listAllComponents(dir, subDir = null, prevFileName = null) {
    if(!fs.existsSync(dir)) {
        console.warn('\x1b[31mPath does not match existing directory !\x1b[0m');
        return;
    }

    const files = fs.readdirSync(dir);
    let filesNumber = files.length;
    let parsedFiles = 1;
    let noSubdirectories = true;
    let noFiles = filesNumber === 0;
    
    if(noFiles && subDir !== dir) {
        writeComponentFiles(dir);
    } else {
    files.forEach(function(file) {
        const path = `${dir}/${file}`;
        const stat = fs.statSync(path);
            
        if (stat && stat.isDirectory()) {
            noSubdirectories = false;
            listAllComponents(path, subDir ? subDir : !prevFileName ? path : null, file);
        }
        parsedFiles += 1;
        if(parsedFiles === filesNumber && noSubdirectories) {
            result[subDir] = result[subDir] || {};
        
            const finalPath = dir.replace(`${subDir}/`, '');
            result[subDir][finalPath] = prevFileName;
        }
    });
    return result;
    }
};

Object.entries(listAllComponents('src/components')).forEach(function([ filePath, components ]) {
    const fileBody = Object.entries(components).map( ([componentPath, component]) => formatExportString(componentPath, component) ).join('\n');

    fs.writeFile(`${filePath}/index.js`, `${HEADER_WARNING}\n\n${fileBody}`, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m${filePath}/index.js Saved!\x1b[0m`);
    });
})