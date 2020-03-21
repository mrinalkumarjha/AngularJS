// added following reference for intellence purpose. without this intelliance wont come.
/// <reference path="angular.min.js" />


// creating module
// then we need to associate this module with ng-app directive
var myapp = angular.module("myModule", []); 


// Creating controller
// then we need to associate this controller with ng-controller directive, and we do that in view.
var myController = function ($scope) {
    $scope.messgae = "Angular js tutorial";
}

// Registring controller.
myapp.controller("myController", myController);