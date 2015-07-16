"use strict";

require('../page/productsPage.js');

var LoginPage = function () {

    // Get Page Url
    this.getUrl = function (baseUrl) {
        return baseUrl + "login";
    };

    // Enter Login Info
    this.enterLoginInfo = function(email, password) {
        element(by.model('user.email')).sendKeys(email);
        element(by.model('user.password')).sendKeys(password);
    };

    // Click Login Button
    this.clickLogin = function() {
        element(by.css('[ng-click="login()"]')).click();
        return require('./productsPage.js');
    };

    

};

module.exports = new LoginPage();