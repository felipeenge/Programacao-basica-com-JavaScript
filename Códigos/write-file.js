// Módulo Nativo do NodeJS. O arquivo gravado também vai se chamar write-file
const fs = require('fs')

fs.writeFile('write-file.txt', "Hello there", (err) => {
    if (err) {
        throw err;
    } else {
        console.log('The file has been saved!');
    }
}); 