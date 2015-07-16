"use strict";

describe('currentUser', function () {

    // Var to store currentUser
    var factory;

    // Before each test runs, set module and get currentUser as: factory
    beforeEach(function () {

        // Set to the module found in currentUser
        module("common.services");

        // Get currentUser and store in factory
        inject(function ($injector) {
            factory = $injector.get("currentUser");
        });

    });




    it('should return blank profile and isLoggedIn in=false', function () {

        var profile = factory.getProfile();

        expect(profile.userName).toEqual("");
        expect(profile.email).toEqual("");
        expect(profile.token).toEqual("");
        expect(profile.isLoggedIn).toEqual(false);
    });


    it('should set profile and isLoggedIn=true', function () {

        var userName = "Karl";
        var email = "karl@gmail.com";
        var token = "777";

        factory.setProfile(userName, email, token);
        var profile = factory.getProfile();

        expect(profile.userName).toEqual(userName);
        expect(profile.email).toEqual(email);
        expect(profile.token).toEqual(token);
        expect(profile.isLoggedIn).toBe(true);
    });


    it('should logout and reset profile', function () {

        var userName = "Karl";
        var email = "karl@gmail.com";
        var token = "777";

        factory.setProfile(userName, email, token);
        var profile = factory.getProfile();
        factory.logout();

        expect(profile.userName).toEqual("");
        expect(profile.email).toEqual("");
        expect(profile.token).toEqual("");
        expect(profile.isLoggedIn).toEqual(false);
    });


});//End describe