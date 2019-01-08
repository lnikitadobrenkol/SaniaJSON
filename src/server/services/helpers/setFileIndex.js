const fs = require('fs');
const indexFilePath = "./src/dataBase/file-indexData.json";

let indexObject;
let indexString;

module.exports = function downloadIndex() {
    const indexData = fs.readFileSync(indexFilePath);

    try {
        indexObject = JSON.parse(indexData);
    } catch (error) {
        console.error("Sorry, i can`t parse to JSON indexDATA file. \n" + error);
    }

    let currentFileIndex = indexObject.currentIndex;

    currentFileIndex += 1;

    indexObject.currentIndex = currentFileIndex;

    try {
        indexString = JSON.stringify(indexObject, null, 2);
    } catch (error) {
        console.error("Sorry, i can`t parse to JSON indexDATA file. \n" + error);
    }

    fs.writeFileSync(indexFilePath, indexString, 'utf8');

    return currentFileIndex;
};

