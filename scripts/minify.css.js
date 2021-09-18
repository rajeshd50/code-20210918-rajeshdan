const fs = require("fs");
const path = require("path");
var CleanCSS = require('clean-css');

var files = [
    {
        input: 'style.css',
        output: 'style.min.css'
    }, {
        input: 'custom.css',
        output: 'custom.min.css'
    }
]

const async = require("async");

async.eachOfSeries(files, (item, key, callback) => {
    new CleanCSS({sourceMap: true, rebaseTo: path.resolve(__dirname, '..', path.sep, 'public')}).minify([
        path.resolve(__dirname, '..', path.sep, 'public', path.sep, 'css', path.sep, item.input),
    ], (err, op) => {
        if (err) {
            return callback(err);
        }
        if (op && op.styles) {
            fs.writeFileSync(path.resolve(__dirname, '..', path.sep, 'public', path.sep, 'css', path.sep, item.output ), op.styles)
            console.log(item.input, ' minified!');
        }
        return callback(null);
    });
}, (err) => {
    if (err) {
        console.log('Error while minifying css', err);
    } else {
        console.log('Minification Done');
    }
})