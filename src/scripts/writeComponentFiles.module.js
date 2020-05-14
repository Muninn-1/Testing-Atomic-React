const writeComponentCanvas = require('../constants/canvas/component');
const writeStoriesCanvas = require('../constants/canvas/stories');
const PropTypes = require('prop-types');
const fs = require('fs');

function writeComponentFiles(component) {
    let path = null;
    
    function findFolderPath(dir, folderName) {
        if(path) {
            return;
        }
        const files = fs.readdirSync(dir);
        
        files.forEach(function(file) {
            const _path = `${dir}/${file}`;
            const stat = fs.statSync(_path);
            const isDirectory = stat && stat.isDirectory();
    
            if(isDirectory) {
                if(file === folderName) {
                    path = _path;
                } else {
                    findFolderPath(_path, folderName);
                }
            }
        })
    };
    findFolderPath('src/components', component);

    if(!path) {
        console.warn(`\x1b[31mNo Path found for ${component} !\x1b[0m`);
        return;
    }
    if(!fs.existsSync(path)) {
        console.warn('\x1b[31mPath does not match existing directory !\x1b[0m');
        return;
    }

    const subDir = path.replace('src/components/', '').replace(`/${component}`, '')

    // [path]/[component].jsx
    fs.writeFile(`${path}/${component}.jsx`, writeComponentCanvas(component), function (err) {
        if (err) throw err;
        console.log(`\x1b[32m${path}/${component}.jsx Saved!\x1b[0m`);
    });

    // [path]/[component].module.css
    fs.writeFile(`${path}/${component}.module.css`, ``, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m${path}/${component}.module.css Saved!\x1b[0m`);
    });

    // [path]/[component].test.js
    fs.writeFile(`${path}/${component}.test.js`, ``, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m${path}/${component}.test.js Saved!\x1b[0m`);
    });

    // [path]/[component].stories.js
    fs.writeFile(`${path}/${component}.stories.js`, writeStoriesCanvas(subDir, component), function (err) {
        if (err) throw err;
        console.log(`\x1b[32m${path}/${component}.stories.js Saved!\x1b[0m`);
    });

    // package.json
    const packageJsonBody = `{\n"main": "${component}.jsx"\n}`;
    fs.writeFile(`${path}/package.json`, packageJsonBody, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m${path}/package.json Saved!\x1b[0m`);
    });

}

writeComponentFiles.propTypes = { 
    path: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired
};


module.exports = writeComponentFiles;