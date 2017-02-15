/**
 * Created by Paola Pierola on 1/27/2017.
 */


exports.config = {
    //the address of  Selenium driver
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        login: './e2e/login/envysion-login.js'
        ,

        layout:   './e2e/layout/top-menu.js'
        ,

        dashboard: [
            './e2e/dashboard/functionality-dashboard.js',
            './e2e/dashboard/styles-dashboard.js']
    },


     framework: 'jasmine2',
     onPrepare: function() {
         var jasmineReporters = require('jasmine-reporters');
         jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                 consolidateAll: true,
                 savePath: 'test-results',
                 filePrefix: 'xmloutput',
                 showColors: true,
                 onComplete: null,
                 isVerbose: false,
                 includeStackTrace: true
                 //takeScreenshots: true,
                 //takeScreenshotsOnlyOnFailures: true,
                 //screenshotsFolder: 'images'
             }));



     }

};





