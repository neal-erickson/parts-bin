var path = require('path');

module.exports = {
    entry: './src/components/PartsBin.jsx',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                //loader: 'jsx-loader?insertPragma=React.DOM&harmony'
                loaders: ['jsx-loader?insertPragma=React.DOM&harmony', 'babel']
                // query: { presets: ['react', 'es2015']      }
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
