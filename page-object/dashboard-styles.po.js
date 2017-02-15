/**
 * Created by Paola Pierola on 2/2/2017.
 */


var DashboardPage = function() {
    /*this.username = element(by.id('j_username'));
    this.password = element(by.id('j_password'));
    this.loginButton = element(by.id('loginSubmitButton'));*/

    this.div00Dashboard = element(by.css('project-widgets span10'));
    //this.colorDashboard = element(by.css('vjs-styles-defaults'));
    //this.colorDashboard = element(by.css('.widget-title ng-binding'));
    this.colorDashboard = element(by.css('.heading'));

//widget-title ng-binding
    //page-content
    //.subsection-header
    //.heading

    /*element(by.css('.element')).getCssValue('border').then(function (borderCssValue) {
        expect(borderCssValue).toBe('10px');
    });*/


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

module.exports = DashboardPage;