var path = require('path'); // from node
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/app/app.js', //source
    output: {
        path: path.resolve(__dirname, 'dist') + './app',
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
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192'],
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../in.html',
            template: './src/index.html'
        }),
        // new ExtractTextPlugin("app.css"),
  ]
};