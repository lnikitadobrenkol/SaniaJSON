const express = require('express');
const app = express();

const router = require('./src/server/router');
router(app);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('src/public'));

const server = app.listen(2000, listen);
function listen() {
    let port = server.address().port;
    console.log('Listening at http://' + 'localhost' +  ':' + port);
}