const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        index: "./index.tsx"
    },
    output: {
        filename: "js/index.js",
        path: path.join(__dirname, "../public/"),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js",".scss", "css"],
        alias: {
            'components': path.join(__dirname, './components')
        }
    },

    module: {
        // loaders: [
        //     // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        //     { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        //     { test: /\.scss$/, loader: "css!sass"}
        // ],

        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" , include: __dirname},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader"
            })},
            { test: /\.css$/, loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })},
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre"}
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

     plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
};