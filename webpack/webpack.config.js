const webpack = require('webpack');
const path = require('path')
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = path.resolve(__dirname, '..')
module.exports = {
    mode: 'production',
    entry: {
        bundle: [root + "/example/bundle.js"],
    },
    output: {
        path: root + "/dist/static",
        filename: '[name].js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.es6'],
        modules: ['node_modules']
    },
    externals: {
        'react': 'React',
        'moment': 'moment',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {test: /\.js|\.jsx$/, exclude: /node_modules/, use: {loader: 'babel-loader'}},
            {
                test: /\.scss$|\.css$/,
                use: [{loader: 'style-loader'}, {loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}
                ]
            },

            {test: /\.(jpe?g|png|gif)$/i, use: {loader: 'url?limit=10000!img?progressive=true'}},
            {test: /\.json/i, type: 'javascript/auto', use: {loader: 'json-loader'}}
        ]
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.m?js$/,
    //             exclude: /(node_modules|bower_components)/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env']
    //                 }
    //             }
    //         }
    //     ]
    // }

    plugins: [
        //new HtmlWebpackPlugin({
        //    template: root + "/example/index.html"
        //}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.ContextReplacementPlugin(
            /moment[\\\/]locale$/,
            /^\.\/(zh-cn)$/
        ),
        // new webpack.DllReferencePlugin({
        //     context: root,
        //     manifest: require('../dist/static/vendors-manifest.json')
        // }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false,  // remove all comments
        //     },
        //     compress: {
        //         warnings: false
        //     }
        // }),
        //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        //new BundleAnalyzerPlugin()
        //new ExtractTextPlugin("bundle.css")
    ]
};
