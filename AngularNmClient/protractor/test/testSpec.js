
"use strict";

describe("To test the login flow", function() {

    var sleepTime = 1000; // 1 sec

    // Information Variables
    var iv = {
        baseUrl: "http://localhost:53916/index.html#/app/",
        email: "",
        password: ""
    }

    // Pages
    var page = {
        login: require("../page/loginPage.js"),
        products: null
    }


    it("Should be able to login", function () {

        // Navigate to Login
        browser.get(page.login.getUrl(iv.baseUrl));
        browser.sleep(sleepTime);

        // Enter User login info
        page.login.enterLoginInfo(iv.email, iv.password);
        browser.sleep(sleepTime);

        // Click Login button
        page.products = page.login.clickLogin();
        browser.sleep(sleepTime);

        // Test is correct url
        expect(browser.getCurrentUrl()).toBe(page.products.getUrl(iv.baseUrl));


        

        // Test nav-right user.email is set to what user passed in from login
        expect(page.products.getNavUserEmail()).toEqual(iv.email);

        

    });


    

});//End describe