/**
 * Created by Paola Pierola on 1/31/2017.
 */



describe('Envysion Dashboard layout tests ',

    function() {

        it('should show that I can click on each Dashboard item from Top Menu  ', function(){

            browser.ignoreSynchronization = true;

            browser.get('https://dev1.envysion.com/');

            browser.sleep(1000);

            element(by.id('dashboard')).click();
            //browser.sleep(1000);
            browser.waitForAngular();

            element(by.css('a.ng-isolate-scope')).click();
            //browser.sleep(1000);
            browser.waitForAngular();



            //element(by.css('intelligenceTab')).click();
            //element(by.id('clips')).click();
            //element(by.id('audits')).click();

        });

    });
