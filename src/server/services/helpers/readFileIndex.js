module.exports = function readFileIndex (indexData) {
    let indexObject = {};
    try {
        indexObject = JSON.parse(indexData)
    } catch (error) {
        throw new Error (`Sorry, i can not parse to JSON indexDATA file. \n ${error}`)
    }

    return indexObject.currentIndex;
};

