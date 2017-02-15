/**
 * Created by Paola Pierola on 1/27/2017.
 */


var LoginPage = require('../../page-object/login-page.po.js')

describe('Envysion Login tests ',

    function() {


    it('should show that I can login to Envysion site', function(){

        var page = new LoginPage();

        page.visit();

        expect((page.username).isDisplayed()).toBe(true);
        expect(page.setUsername('admin@panerabread.com'));

        expect((page.password).isDisplayed()).toBe(true);
        expect(page.setPassword('envy.123'));

        expect((page.loginButton).isDisplayed()).toBe(true);
        expect(page.login());


        });
    });




