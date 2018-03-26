const path = require("path");
var webpack = require('webpack');

module.exports = {
    "entry": "./src/App.js",
    "output": {
        "path": path.resolve(__dirname, "public", "build"),
        "publicPath": "/", ///build/
        "filename": "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.(css|scss)$/,
            exclude: /node_modules/,
            loader: ["style-loader","css-loader"]
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        },
    ]
},
resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js','.json','.css']
},

devServer: {
    historyApiFallback: {
        index:"/public/build/"
    }
}

};
