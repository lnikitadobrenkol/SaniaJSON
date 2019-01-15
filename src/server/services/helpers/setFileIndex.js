const fs = require('fs');
const indexFilePath = './src/dataBase/fileIndexData.json';

module.exports = function downloadIndex() {
    let indexObject;

    return readFileAsync(indexFilePath)
        .then((indexData) => {
            try {
                indexObject = JSON.parse(indexData);
            } catch (error) {
                throw new Error(`Sorry, i can not parse to JSON indexDATA file. \n ${error}`)
            }

            let currentFileIndex = indexObject.currentIndex;

            currentFileIndex += 1;

            indexObject.currentIndex = currentFileIndex;

            let indexString;
            try {
                indexString = JSON.stringify(indexObject, null, 2);
            } catch (error) {
                throw new Error (`Sorry, i can not parse to JSON indexDATA file. \n ${error}`)
            }

            return writeFileAsync(indexFilePath, indexString)
                .then(() => currentFileIndex);
        })
        .catch((err) => console.log(err));
};


function readFileAsync(indexFilePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(indexFilePath, function (err, indexData) {
            if (err) {
                reject(err);
                return;
            }
            resolve(indexData);
        })
    });
}

function writeFileAsync(indexFilePath, indexString) {
    return new Promise((resolve, reject) => {
        fs.writeFile(indexFilePath, indexString, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        })
    });
}
