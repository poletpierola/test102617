/**
 * Created by Paola Pierola on 2/15/2017.
 */


//maps certain element
//colors & styles
var LoginPage = require('../../page-object/login-page.po.js')
var DashboardPage  = require('../../page-object/dashboard-styles.po.js')
var WatchvideoPage = require('../../page-object/watchvideo-styles.po.js')

describe('Envysion Watchvideo functionality tests ',

    function() {

        it('should show that all headers from watchvideo site are there', function(){
            var headers = element.all(by.repeater('widgetPair in widgetPairs')).map(function(elm) {
                return elm.getText();
            });


            //display repeater elements
            element.all(by.repeater('widgetPair in widgetPairs')).then(function(results){
                for (var i=0; i<results.length; i++) {
                    console.log(results[0].getText());

                }
            });

        });

        it('should show that all elements are within repeater ', function() {
            var exists = false;

            element.all(by.repeater('widgetPair in widgetPairs')).each(function(elem) {
                elem.getText().then(function(text) {
                    if(text == 'foo')
                        exists = true;
                    return exists;
                }).then(function(exists) {
                    console.log('interim value: ' + exists);  // This appears after
                });
            });

            console.log('final status: ' + exists);   // This appears in the console first

        })

    });