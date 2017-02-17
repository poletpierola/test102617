/**
 * Created by Paola Pierola on 2/14/2017.
 */

var DashboardPage  = require('../../page-object/dashboard-styles.po.js')

describe('Envysion Dashboard functionality tests ',

    function() {

        var dashboard = new DashboardPage();

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