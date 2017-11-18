'use strict'; // eslint-disable-line

const path = require('path');
const webpackConfig = require('./webpack.config.js');

webpackConfig.entry = {};

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
      '../app/static/js/src/__tests__/test_index.js'
    ],

    exclude: [],

    preprocessors: {
      '../app/static/js/src/__tests__/test_index.js': ['webpack', 'sourcemap'],
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,
    autoWatchBatchDelay: 300,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
