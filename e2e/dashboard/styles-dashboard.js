/**
 * Created by Paola Pierola on 2/2/2017.
 */

var DashboardPage  = require('../../page-object/dashboard-styles.po.js')

describe('Envysion Dashboard styles tests ',

    function() {

        var dashboard = new DashboardPage();

        it('should show that the class is there ', function () {
            expect((dashboard.colorDashboard).isPresent()).toBe(true);
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

        it('should show that the class is there', function(){
            expect((dashboard.colorGrid).isPresent()).toBe(true);
        })

        it('should show that the border width is 0px ', function(){
            dashboard.colorGrid.getCssValue('border-bottom-width').then(function (borderBotomWidthValue) {
                console.log('borderBotomWidthValue', borderBotomWidthValue);
                expect(borderBotomWidthValue).toBe('0px');
            })
        });

        it('should show that the color value is rgba(54, 171, 255, 1 ', function(){
            dashboard.colorGrid.getCssValue('color').then(function (colorValue) {
                console.log('colorValue', colorValue);
                expect(colorValue).toBe('rgba(54, 171, 255, 1)');
            })
        });

        it('should show that the font value is Times New Roman ', function(){
            dashboard.colorGrid.getCssValue('font-family').then(function (fontValue) {
                console.log('fontValue', fontValue);
                expect(fontValue).toBe('"Times New Roman"');
            })
        });

        it('should show that the padding value is 0px ', function(){
            dashboard.colorGrid.getCssValue('padding').then(function (paddingSizeValue) {
                console.log('paddingSizeValue', paddingSizeValue);
                expect(paddingSizeValue).toBe('0px');
            })
        });

        it('should show that the font size is 10px  ', function(){
            dashboard.colorGrid.getCssValue('font-size').then(function (fontSizeValue) {
                console.log('fontSizeValue', fontSizeValue);
                expect(fontSizeValue).toBe('10px');
            })
        });

        it('should show that the line height value is normal  ', function(){
            dashboard.colorGrid.getCssValue('line-height').then(function (lineHeightValue) {
                console.log('lineHeightValue', lineHeightValue);
                expect(lineHeightValue).toBe('normal');
            })
        });


        it('should show that the line height value is normal  ', function(){
            dashboard.colorGrid.getCssValue('line-height').then(function (lineHeightValue) {
                console.log('lineHeightValue', lineHeightValue);
                expect(lineHeightValue).toBe('normal');
            })
        });




     });