module.exports = function readFileIndex (indexData) {
    let indexObject = {};
    try {
        indexObject = JSON.parse(indexData)
    } catch (error) {
        console.error("Sorry, i can`t parse to JSON indexDATA file. \n" + error);
    }

    return indexObject.currentIndex;
};

