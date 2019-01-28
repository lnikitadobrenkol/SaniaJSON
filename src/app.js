require('@google-cloud/debug-agent').start();

const express = require('express');
const router = require('./server/router');
const bodyParser = require('body-parser');

const app = express();
router(app);

app.use( bodyParser.json() );
app.use( express.static('src/public') );

const server = app.listen(8080, () => {
    const port = server.address().port;
    console.log(`Listening at http://localhost:${port}`);
});
