module.exports = function getDuplicates(data) {
    let duplicates = {};
    if ( Array.isArray(data) ) {
        if ( Array.isArray(data[0]) ) {
            duplicates[data[0][0]] = data[0][1];

            for (let i = 1; i <= data.length - 1; i++) {
                const row = data[i];
                const prevRow = data[i - 1];
                const value = row[1];

                const key = row[0] === prevRow[0] ? `${i}_${row[0]}` : row[0];
                duplicates[key] = value;
            }

            return duplicates;
        }  else {
            throw new Error('Cleaned array is not dose not consist from arrays, but should be, fix it...');
        }
    } else {
        throw new Error('Cleaned array is not actually an array, i can not work in such conditions...');
    }
};
