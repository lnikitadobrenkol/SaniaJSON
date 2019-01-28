const multer = require('multer');
const currentFileIndex = require('../services/helpers/setFileIndex');
const duplicatesService = require('../services/duplicatesService');

const filePath = 'src/inputData';

    const fileDestination = {
        destination: function(req, file, callback) {
            callback(null, filePath);
        },
        filename: function(req, file, callback) {
            currentFileIndex()
                .then((index) => {
                    callback(null, 'duplicates_(' + index + ').json')
                });
        }
    };

const storage = multer.diskStorage(fileDestination);

const upload = multer({ storage: storage }).array('Uploader', 3);

module.exports = function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end(`Oh NO! Bitcha, there is a problem with uploading your fucking file...${err}`);
        } else {
            duplicatesService();
            return res.end('Well done! Your fucking file is processed and now is in the outputData folder...');
        }
    });
};
