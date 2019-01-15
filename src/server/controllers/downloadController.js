const fs = require('fs');
const getFileIndex = require('../services/helpers/readFileIndex');

module.exports = function (req, res) {
    getFileIndex()
        .then((index) => {
            const filePath = `src/outputData/duplicates_(${index}).json`;
            const fileName = `duplicates_(${index}).json`;

            res.download(filePath, fileName, function () {
                fs.unlinkSync(`src/inputData/duplicates_(${index}).json`);
                fs.unlinkSync(`src/outputData/duplicates_(${index}).json`);
            });
        })
        .catch((err) => console.log(err));

};
