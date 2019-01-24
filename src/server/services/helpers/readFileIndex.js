const fs = require('fs');

const indexFilePath = './src/dataBase/fileIndexData.json';

module.exports = function readFileIndex () {
    return new Promise((resolve, reject) => {
        fs.readFile(indexFilePath, function read(err, indexData) {
            let indexObject = {};

            if (err) {
                reject(err);
                return;
            }
            try {
                indexObject = JSON.parse(indexData)
            } catch (error) {
                reject(new Error(`Sorry, i can not parse to JSON indexDATA file. \n ${error}`));
            }

            resolve(indexObject.currentIndex);
        });
    });
};

