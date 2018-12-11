const fs = require('fs');

const clearInput = [];
const output = {};

module.exports = function(req, res) {
    const input = fs.readFileSync('src/inputData/inputJson.json').toString().split(',');

    getClearArr(input);
    getDuplicates();
    writeToJson(output);

    function getClearArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            clearInput[i] = removeSpecialChars(arr[i]);
        }
    }

    function getDuplicates() {
        let firstItem = clearInput[0];
        for (let key in firstItem) {
            output[key] = firstItem[key];
        }

        for (let i = 1; i <= clearInput.length; i++) {
            let nextItem = clearInput[i];
            let previousItem = clearInput[i - 1];

            for (let nextKey in nextItem) {
                let thisNextKey = nextKey;

                for (let previousKey in previousItem) {
                    if (nextKey === previousKey) {
                        nextKey = i + '_' + nextKey;

                        output[nextKey] = nextItem[thisNextKey];
                    } else {
                        output[nextKey] = nextItem[nextKey];
                    }
                }
            }
        }
        return output;
    }

    function writeToJson(json) {
        fs.writeFileSync('src/outputData/outputData.json', JSON.stringify(json, null, 2) , 'utf-8');
        return res.end("Well done! I checked your fucking file and now it is in the outData directory...");
    }

    function removeSpecialChars(str) {
        const r = /[0-9-A-Z]/gi;
        const keyvalue = str.split(':');
        let key = keyvalue[0].match(r);
        key = key ? key.join('') : '';
        let value = keyvalue[1] ? keyvalue[1].match(r) : '';
        value = value ? value.join('') : '';
        const obj = {};
        obj[key] = value;

        return obj;
    }
};







