const uploadController = require('./controllers/uploadController');
const mainPageController = require('./controllers/mainPageController');
const downloadController = require('./controllers/downloadController');

module.exports = function router(app) {
    app.get('/', mainPageController);

    app.get('/download', downloadController);

    app.post('/upload', uploadController);
};
