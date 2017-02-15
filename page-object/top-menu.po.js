/**
 * Created by Paola Pierola on 1/31/2017.
 */


var TopMenuPage = function() {
    this.dashboard = element(by.id('dashboard'));
    this.watchVideo = element(by.css('a.ng-isolate-scope'));

    this.visit = function() {
        browser.ignoreSynchronization = true;

        browser.get('https://dev1.envysion.com/');

        browser.sleep(1000);

    };


    this.dashboardLink = function() {
        this.dashboard.click();
    };

   /* this.watchVideoLink = function()  {
        this.watchVideo.click();
    }*/

};

module.exports = TopMenuPage;