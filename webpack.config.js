const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        index: './src/index.js',
        books: './src/books.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
       

    }
};