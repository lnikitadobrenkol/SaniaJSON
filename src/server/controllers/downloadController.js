module.exports = function (req, res) {
    const filePath = "src/outputData/outputData.json";
    const fileName = "outputData.json";

    res.download(filePath, fileName);
};