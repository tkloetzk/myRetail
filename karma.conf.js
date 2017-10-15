// Karma configuration
// Generated on Wed Oct 11 2017 19:27:01 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    spects:['test/unit/*.js'],
    
    // list of files / patterns to load in the browser
    files: [
    	'node_modules/angular/angular.min.js', 
        'node_modules/angular-mocks/angular-mocks.js', 
    //    'node_modules/angular-mocks/ngMock.js',                              
        'node_modules/angular-ui-router/release/angular-ui-router.min.js', 
    //    'node_modules/angular/angular-scenario.js', 
        'node_modules/angular-sanitize/angular-sanitize.min.js',
    	'node_modules/requirejs/require.js',
    	'js/app.js',
    	'js/components/product/product.js',
    	'js/components/product/controller/*.js',
    	'js/components/product/service/*.js',
    	'js/components/product/directive/*.js',
    	'js/components/global/carousel/*.js',
    	'js/components/global/rating/*.js',
    	'test/unit/*.js'
    	
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'], //switch to phantomjs


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
