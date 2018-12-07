const multer = require('multer');

const fileDestination = {
    destination: function (req, file, callback) {
        callback(null, "src/inputData");
    },
    filename: function (req, file, callback) {
        callback(null, "inputJson.json");
    }
};

const storage = multer.diskStorage(fileDestination);

const upload = multer({ storage: storage }).array("Uploader", 3);

module.exports = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Oh NO! Hey, bitcha, there is a problem with uploading your fucking file..." + err);
        }
        return res.end("Well done! I uploaded your fucking file...");
    });
};