var path = require('path'); // from node

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/app.js', //source
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/' //refer the bundle file as in the app folder
    },
    module: {
        rules: [
            {
                test: /\.js$/, // look for js files
                include: path.resolve(__dirname, 'src'), // where to look for
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};