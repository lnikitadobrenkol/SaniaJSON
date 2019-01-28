const fs = require('fs');

const getDuplicates = require('./helpers/getDuplicates');
const getFileIndex = require('./helpers/readFileIndex');

const inputFilePath = 'src/inputData/';
const outputFilePath = 'src/outputData/';

module.exports = function duplicatesService() {
    let fileName = '';
    let inputArr;
    let cleanedInputArr;

    getFileIndex()
        .then((index) => {
            fileName = `duplicates_(${index}).json`;
            fs.readFile(inputFilePath + fileName, function (err, inputData) {
                if (err) {
                    console.error(err.stack);
                }

                inputData = inputData.toString();
                inputArr = inputData.replace(/[{}\n\r"]/igm, '').split(',');
                cleanedInputArr = inputArr
                    .map((val) => val.trim().split(':'))
                    .map((val) => [val[0], val[1].trim()]);

                let duplicates = getDuplicates(cleanedInputArr);
                try {
                    duplicates = JSON.stringify(duplicates, null, 2);
                } catch (error) {
                    throw new Error(`Sorry, i can not stringify your object "duplicates". \n ${error}`)
                }

                fs.writeFile(outputFilePath + fileName, duplicates, 'utf-8', function write(err) {
                    if (err) {
                        console.error(err.stack);
                    }
                });
            });
        })
        .catch((err) => console.log(err));
};
