const uploadController = require('./controllers/uploadController');
const duplicatesController = require('./controllers/duplicatesController');
const downloadController = require('./controllers/downloadController');

module.exports = function router(app) {
    app.post("/Upload", uploadController);

    app.get("/get-duplicates", duplicatesController);

    app.get("/download", downloadController);
};

