const fs = require('fs');
const path = require('path');

function generateTree(dir, depth = 0) {
    const files = fs.readdirSync(dir);
    let tree = '';
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        tree += '  '.repeat(depth) + '|-- ' + file + '\n';
        if (isDirectory) {
            tree += generateTree(filePath, depth + 1);
        }
    });
    return tree;
}

const projectDir = path.resolve(__dirname);
const tree = generateTree(projectDir);
fs.writeFileSync('project-structure.txt', tree);
console.log('Project structure saved to project-structure.txt');
