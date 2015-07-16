"use strict";



var ProductsPage = function() {

    // Page Url
    this.getUrl = function (baseUrl) {
        return baseUrl + "products";
    };

    // Get Nav-Right: User Email 
    this.getNavUserEmail = function() {
        return element(by.css("#navRightUserEmail")).getText();
    };

    

};

module.exports = new ProductsPage();