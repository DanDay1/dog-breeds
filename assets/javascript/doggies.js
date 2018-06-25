


// controller.js:


    function controller($scope, empDetails) {
        var empName;
        console.log("yyyyyy");
        empDetails.getEmpDetails().then(function successCallback(response) {
            empName= response.data.name;
            if (empName) {
                $scope.name = empName;
            }
        });  

    angular.module('abc')
        .controller('controller', controller);
}();

// service.js:

(function () {
    "use strict";
    var empDetails= function ($http) {
        var factory = {};
        console.log("xxxx");
        factory.getEmpDetails = function () {
            return $http({
                method: 'GET',
                url: 'https://breeds-fa27.restdb.io/rest/dogs?&apikey=5b25a6e646624c7b24444f16'
            }).then(function (data) {
                return data;
                console.log("data: " + data);
            })
        }
        return factory;
    };
    empDetails.inject = ['$http'];
    angular.module('abc').service('empDetails', empDetails);
}())


'use strict';
// angular.module('Doggies', ['ngResource']);
 angular.module('Doggies', ['doglist']);


