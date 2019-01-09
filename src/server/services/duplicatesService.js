const fs = require('fs');

const getDuplicates = require('./helpers/getDuplicates');
const getFileIndex = require('./helpers/readFileIndex');

const inputFilePath = 'src/inputData/';
const outputFilePath = 'src/outputData/';

const indexFilePath = './src/dataBase/fileIndexData.json';

let fileName =``;

module.exports = function() {
    const indexData = fs.readFileSync(indexFilePath);
    const currentIndex = getFileIndex(indexData);

    fileName = `duplicates_(${currentIndex}).json`;

    const inputStringFile = fs.readFileSync(inputFilePath + fileName).toString();
    const inputArrFile = inputStringFile.replace(/[{}\n\r"]/igm, '').split(',');

    const cleanedInputArr = inputArrFile.map((val) => val.trim().split(':')).map((val) => [val[0], val[1].trim()]);

    let duplicates = getDuplicates(cleanedInputArr);

    try {
        duplicates = JSON.stringify(duplicates, null, 2);
    } catch (error) {
        throw new Error (`Sorry, i can not stringify your object "duplicates". \n ${error}`)
    }

    fs.writeFileSync(outputFilePath + fileName, duplicates, 'utf-8');
};
