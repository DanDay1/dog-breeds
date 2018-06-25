'use strict';
angular.module('Doggies', ['ngResource']);

$http.get('https://breeds-fa27.restdb.io/rest/dogs?&apikey=5b25a6e646624c7b24444f16', config).then(successCallback, errorCallback);
