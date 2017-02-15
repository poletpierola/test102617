/**
 * Created by Paola Pierola on 2/2/2017.
 */



var WatchvideoPage = function() {
    /*this.username = element(by.id('j_username'));
     this.password = element(by.id('j_password'));
     this.loginButton = element(by.id('loginSubmitButton'));*/

    this.watchvideowhole = element(by.id('wrapper'));
    this.watchvideoleft = element(by.id('carl'));
    this.watchvideomiddle = element(by.id('carlos'));
    this.watchvideoright = element(by.id('header'));



    this.visit = function() {
        browser.ignoreSynchronization = true;

        browser.get('https://dev1.envysion.com/');

        browser.waitForAngular();

    };



    /* this.setUsername = function(username) {
     this.username.clear();
     this.username.sendKeys(username);
     };

     this.setPassword = function(password){
     this.password.clear();
     this.password.sendKeys(password);
     };

     this.login = function() {
     this.loginButton.click();
     };*/





};

module.exports = WatchvideoPage;