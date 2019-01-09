const fs = require('fs');

const indexFilePath = "./src/dataBase/file-indexData.json";

module.exports = function (req, res) {
    const getFileIndex = require('../services/helpers/readFileIndex');

    const indexData = fs.readFileSync(indexFilePath);
    const currentIndex = getFileIndex(indexData);

    const filePath = "src/outputData/duplicates_(" + (currentIndex) + ").json";
    const fileName = "duplicates_(" + (currentIndex) + ").json";

    res.download(filePath, fileName, function () {
        fs.unlinkSync("src/inputData/duplicates_(" + (currentIndex) + ").json");
        fs.unlinkSync("src/outputData/duplicates_(" + (currentIndex) + ").json");
    });
};
