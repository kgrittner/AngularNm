(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                 "appSettings",
                 "currentUser",
                    productResource])

    function productResource($resource, appSettings, currentUser) {

        console.log("rYDAkLog3qtOOSFcHQSCRMwtw6LUU40n8-EQqP8aKzAGxltawiZt5DASaGghE83Y58fJB7WybcoDjwqaAcHIQyd_wRyBguQqp1VBRXypg4UhzqujxBNWiNxF7NyhylpBNXP2bItbw-Gnsxcdjt1Rn_FoOy_j_hQ1irQHxEZT7tOXsYgfHlQY7d8qVZ9RnpyIvrpGUbniivuN2gEgeBMb10KM6aVACCTHqpNl35ZC7woe45xSOq7pada3KV0Cl67AseIKSxLW1Yoy6bNPzUDKaOxawsD2q__IEKZPi2uoEHejo5do6vDEqXFIuAyFDM9qCYjDAgmHv3ggv9ucoFDrGAYsCFpPeNY87d-hpNjWfwo4a9NEjb7QvkdDsfu50Jy39950l_As5PK7Fu_ayUcrJlrGJ0D-wi-Sxa4SIZWt2zbS3FX-wstP7hN6VtZFMUpP-E5477EMkkd8gT0MimTEl0lqMPkFh3N0z1rPH8f-5NjulharpkOIqLsfFV6053vA");
        console.log("TOKEN" + currentUser.getProfile().token);

        return $resource(appSettings.serverPath + "/api/products/:id", null,
            {
                'query': {
                    isArray: true,
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                },
        
                'get': {
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                },

                'save': {
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                },

                'update': {
                    method: 'PUT',
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                }
            });
    }
}());

