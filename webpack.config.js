
const {resolve} = require('path');
const {NamedModulesPlugin} = require('webpack');
const {CheckerPlugin} = require('awesome-typescript-loader');


module.exports = {

    devtool: 'source-map',

    context: resolve(__dirname, 'src'),

    entry: './index.ts',

    output: {
        filename: 'agama.uuid.js',
        path: resolve(__dirname, 'dist'),
        library: ['agama', 'uuid'],
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'awesome-typescript-loader'
            }
        ]
    },

    plugins: [
        new CheckerPlugin(),
        new NamedModulesPlugin()
    ]

};
