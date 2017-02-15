/**
 * Created by Paola Pierola on 2/14/2017.
 */

var LoginPage = require('../../page-object/login-page.po.js')
var DashboardPage  = require('../../page-object/dashboard-styles.po.js')
var WatchvideoPage = require('../../page-object/watchvideo-styles.po.js')

describe('Envysion Dashboard functionality tests ',

    function() {

        var dashboard = new DashboardPage();

        var watchvideo = new WatchvideoPage();


        /*var page = new LoginPage();
         page.visit();

         expect((page.username).isDisplayed()).toBe(true);
         expect(page.setUsername('admin@panerabread.com'));

         expect((page.password).isDisplayed()).toBe(true);
         expect(page.setPassword('envy.123'));

         expect((page.loginButton).isDisplayed()).toBe(true);
         expect(page.login());




         //widgetPair in widgetPairs
         //row widget-row ng-scope

         /*it('should verify all headers from Watch Video site ', function(){
         var headers = element.all(by.repeater('widgetPair in widgetPairs')).map(function(elm) {
         return elm.getText();
         });

         //var aPromiseOfRows = element.all(by.repeater('widgetPair in widgetPairs'));



         /*expect(headers).toEqual([
         "SfE | 2.0 Accuracy",
         "SfE | 2.0 Environment",
         "SfE | 1.0 Accuracy" ,
         "SfE | 2.0 Accuracy",
         "SfE | 1.0 Environment",
         "SfE | 1.0 Speed" ,
         "Customer Survey Accuracy",
         "SfE Warmth",
         "SfE Ops Integrity",
         "SfE Environment"
         ]);*/
        //header-title="SfE | 2.0 Accuracy"
//header-title="SfE | 2.0 Environment"
//header-title="SfE | 1.0 Accuracy"
//header-title="SfE | 2.0 Accuracy"
//header-title="SfE | 1.0 Environment"
//header-title="SfE | 1.0 Speed"
//header-title="Customer Survey Accuracy"
//header-title="SfE Warmth"
//header-title="SfE Ops Integrity"
//header-title="SfE Environment"

        //display repeater elements
        /* element.all(by.repeater('widgetPair in widgetPairs')).then(function(results){
         for (var i=0; i<results.length; i++) {
         console.log(results[0].getText());

         }
         });
         });*/

        it('should show that the items exist in repeater ', function () {
            var exists = false;

            element.all(by.repeater('widgetPair in widgetPairs')).each(function (elem) {
                elem.getText().then(function (text) {
                    if (text == 'foo')
                        exists = true;
                    return exists;
                }).then(function (exists) {
                    console.log('interim value: ' + exists);  // This appears after
                });
            });

            console.log('final status: ' + exists);   // This appears in the console first


        });

    });