'use strict'; // eslint-disable-line

const path = require('path');
const webpackConfig = require('./webpack.config.js');

webpackConfig.entry = {};

module.exports = function (config) {
    config.set({
        basePath: '',
        singleRun: true,
        frameworks: ['mocha'],
        reporters: ['dots'],
        browsers: ['Chrome'],
        files: [
          '../app/static/js/src/__tests__/*-test.js'
        ],
        preprocessors: {
            '../app/static/js/src/__tests__/*-test.js': ['webpack', 'sourcemap'],
        },
        webpack: {
            resolve: {
                extensions: ['', '.js', '.ts'],
                modulesDirectories: ['../node_modules', '../app'],
            },
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                }],
            },
        },
        webpackMiddleware: {
            stats: {
                color: true,
                chunkModules: false,
                modules: false,
            },
        },
    });

};
