const fs = require('fs');

const getDuplicates = require('./helpers/getDuplicates');

const inputFilePath = "src/inputData/";
const outputFilePath = "src/outputData/";

const indexFilePath = "./src/dataBase/file-indexData.json";

module.exports = function() {
    const getFileIndex = require('./helpers/readFileIndex');

    const indexData = fs.readFileSync(indexFilePath);
    const currentIndex = getFileIndex(indexData);

    const fileName = "duplicates_(" + (currentIndex) + ").json";

    const inputStringFile = fs.readFileSync(inputFilePath + fileName).toString();
    const inputArrFile = inputStringFile.replace(/[{}\n\r"]/igm, '').split(',');

    let cleanedInputArr = inputArrFile.map((val) => val.trim().split(':'));
    cleanedInputArr = cleanedInputArr.map((val) => [val[0], val[1].trim()]);

    const duplicates = getDuplicates(cleanedInputArr);
    fs.writeFileSync(outputFilePath + fileName, JSON.stringify(duplicates, null, 2), 'utf-8');
};







