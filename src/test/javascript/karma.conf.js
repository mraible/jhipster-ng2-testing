// Karma configuration
// http://karma-runner.github.io/0.13/config/configuration-file.html

var sourcePreprocessors = ['coverage', 'webpack'];

function isDebug() {
    return process.argv.indexOf('--debug') >= 0;
}

if (isDebug()) {
    // Disable JS minification if Karma is run with debug option.
    sourcePreprocessors = [];
}

module.exports = function (config) {
    var webpackConfig = require('../../../webpack/webpack.test');

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        /*
         * list of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [ { pattern: './spec-bundle.js', watched: false } ],

        // list of files / patterns to exclude
        exclude: ['./src/test/javascript/e2e/**'],

        /*
         * preprocess matching files before serving them to the browser
         * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: { './spec-bundle.js': sourcePreprocessors },

        // Webpack Config at ./webpack.dev.js
        webpack: webpackConfig,

        reporters: ['dots', 'junit', 'coverage', 'progress'],

        junitReporter: {
            outputFile: './target/test-results/karma/TESTS-results.xml'
        },

        coverageReporter: {
            dir: './target/test-results/coverage',
            reporters: [
                {type: 'lcov', subdir: 'report-lcov'}
            ]
        },

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: { stats: 'errors-only'},

        // web server port
        port: 9876,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // to avoid DISCONNECTED messages when connecting to slow virtual machines
        browserDisconnectTimeout: 10000, // default 2000
        browserDisconnectTolerance: 1, // default 0
        browserNoActivityTimeout: 4 * 60 * 1000 //default 10000
    });
};
