module.exports = function getDuplicates(cleanedArray) {
    let duplicatesObject = {};
    duplicatesObject[cleanedArray[0][0]] = cleanedArray[0][1];

    for (let i = 1; i <= (cleanedArray.length - 1); i++) {
        let nextItem = {};
        nextItem[cleanedArray[i][0]] = cleanedArray[i][1];
        let previousItem = {};
        previousItem[cleanedArray[i - 1][0]] = cleanedArray[i - 1][1];

        for (let nextKey in nextItem) {
            let thisNextKey = nextKey;

            for (let previousKey in previousItem) {
                if (nextKey === previousKey) {
                    nextKey = i + '_' + nextKey;

                    duplicatesObject[nextKey] = nextItem[thisNextKey];
                } else {
                    duplicatesObject[nextKey] = nextItem[nextKey];
                }
            }
        }
    }
    return duplicatesObject;
};
