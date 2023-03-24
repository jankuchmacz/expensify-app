//path to current location, absolute
//console.log(__dirname);
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const { webpack } = require('webpack');
//console.log(path.join(__dirname, 'public'))

//it is variabble that stores environment (production, development etc)
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if(process.env.NODE_ENV==='test'){
    require('dotenv').config({path: '.env.test'});
} else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'});
}

//entry point - we have to provide it, where webpack should start
//output file - where we put it
module.exports = (env) => {
    const isProduction = env==='production';
    const CSSExtract = new ExtractTextPlugin('style.css'); //styles.css file 
    console.log('env', env);
    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module:{
           rules: [{
            loader:'babel-loader',
            test: /\.js$/, //only files which end with .js
            exclude: /node_modules/ //exclude some files
           },{
            test:/\.s?css$/, //target all files that end with .scss
            use: CSSExtract.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap:true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap:true
                        }
                    },
                ]
            })//thanks to use we can specify array of loaders
           }] 
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASURMENT_ID': JSON.stringify(process.env.FIREBASE_MEASURMENT_ID),

            })
        ],
        //SourceMap - using source maps makes debugging faster
        //we get information where error occurs
        devtool: isProduction ? 'source-map': 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, //we have to tell devServer to always serve up index.html file
            publicPath: '/dist/'
        }
        
    };
    //loader - how a file is transformed when webpack uses it for example transform it with babel
}



