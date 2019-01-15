const fs = require('fs');

module.exports = function (req, res) {
    fs.readFile('./src/public/index.html', function(err, html) {
        if (err) {
            throw err;
        }
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
    });
};
