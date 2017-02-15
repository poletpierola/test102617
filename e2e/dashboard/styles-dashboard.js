/**
 * Created by Paola Pierola on 2/2/2017.
 */

//user-nav-control dropdown-toggle ng-binding



var LoginPage = require('../../page-object/login-page.po.js')
var DashboardPage  = require('../../page-object/dashboard-styles.po.js')
var WatchvideoPage = require('../../page-object/watchvideo-styles.po.js')

//subsection-header

describe('Envysion Dashboard styles tests ',

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

*/



        it('should show that the class is there ', function () {
            expect((dashboard.colorDashboard).isPresent()).toBe(true);
            //console.log('dashboard.colorDashboard', dashboard.colorDashboard);

        });

        it('should show that the border style is 0px ', function () {
            dashboard.colorDashboard.getCssValue('margin').then(function (bordercssValue) {
                console.log('bordercssValue', bordercssValue);
                expect(bordercssValue).toBe('0px');
            })
        });

        it('should show that the font-size is 10px ', function(){
            dashboard.colorDashboard.getCssValue('font-size').then(function (fontsizeValue) {
                console.log('fontsizeValue', fontsizeValue);
                expect(fontsizeValue).toBe('20.5px');
            })
        });



     });