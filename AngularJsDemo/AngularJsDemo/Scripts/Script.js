// added following reference for intellence purpose. without this intelliance wont come.
/// <reference path="angular.min.js" />


// creating module
// then we need to associate this module with ng-app directive
//var myapp = angular.module("myModule", []); 


//// Creating controller
//// then we need to associate this controller with ng-controller directive, and we do that in view.
//var myController = function ($scope) {
//    var employee = {
//        FirstName: 'David',
//        LastName: 'hasting',
//        Gender: 'Male'

//    }
//    $scope.employee = employee;
//}

//// Registring controller.
//myapp.controller("myController", myController);



// creating module controller and registering in one line using method chaining.
// either you can use above method or this one using method chaining.
var myapp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employee = {
            FirstName: 'David',
            LastName: 'hasting',
            Gender: 'Male',
            ImageUrl:'Images/sample.jpg'

        }
        
        $scope.employee = employee;
        $scope.message = "Hello Angular";
       
    });
    