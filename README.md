# AngularJS


To build angularjs application we need only one file (angular.js) . To get the script file visit angularjs.org
https://angularjs.org/

# CDN LINK FOR ANGULARJS : https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js

# step to use angularjs in application
	1: add reference of your angularjs script file
	2: add ng-app attribute somewhere in html. ng-app is directive. it is a starting point of angularjs application.
	if we add ng-app in one div element so everything inside that div will be managed by angular now. if we add ng-app
	in body then angular is responsible for handling all element expression inside body.
	
	Ex: 
	
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8" />
	<script src="Scripts/angular.min.js"></script>
	<title></title>
	</head>
	<body ng-app>
	<div >
	10 + 20 = {{10+20}}
	</div>

	<div>
	10 + 50 = {{10+50}}
	</div>

	</body>
	</html>
	
# Module and Controller in angularjs:
	
	Module: Module is container for different part of your application. ie: controllers, services, directives, filters etc.
	you can think module as a main method in other type of application.
	
	How to create a module:
		Use the angular objects module method to create module.
		ex: var myapp = angular.module("MyModuleName", [dependencylist])
		a module can depend on another module also. if a module is not depend on any other module
		keep second parameter empty.
							
	Controller: In angular controller is a javascript function. The job of controller is to build a model for view to display.
	a controller may call webservice to retrive data from database. 

	How to create controller in angular:
	var mtController = function($scope) {
	$scope.message = "AngularJS tutorial"; // here we are attaching message property to scope object.
	}

## $scope: This is angular object which is passed to controller function automatically. we attach the modal to $scope object which will be accessible
			in view.
 
# ng src directive:
					Using binding expression with the image src attribute result in 404 error. Image will display but 404 error will display
					in network tab. Reason for 404 error is binding expression. At the time of dom parsing request 
					 is issued for image and binding expression are not available at this point.
					so 404 error comes. but how image are available in browser. this is happened by second request after binding expression available.
					so 2 request made for single image. 
					To solve this we use ng src directive. ng src directive ensures that only req is made after binding expression is available.
					So by ng src no 404 error will come and only one request will be created.


# Two way data binding in angularjs:
					Two way databinding keeps model and view in sync all the time. that is change in model update view and vice versa.
					we achive two way binding using ng-model directive. ng-model directive can be used with input, select and text area.
					
					IN UI:
					 <input type="text" ng-model="message" />
					 Message : {{message}}

					 IN CONTROLLER: $scope.message = "Hello Angular";

# AngularJS ng repeat directive:
					ng-repeat is simar to foreach in c#.  we use this directive to show list in ui. We use $index property to find index of item

					in controller :
									 var employees = [
							{ FirstName: "David", LastName: "hasting", Gender: "Male", Salary: 9000},
							{ FirstName: "mrinal", LastName: "jha", Gender: "Male", Salary: 8000 },
							{ FirstName: "preety", LastName: "jha", Gender: "Male", Salary: 10860},
							{ FirstName: "jintrsh", LastName: "jha", Gender: "Male", Salary: 18500 }
						]
        
						$scope.employees = employees;
					
					IN UI:
							 <tr ng-repeat="employee in employees">
							 <td>{{$index}}</td>
                    <td>{{employee.FirstName}}</td>
                    <td>{{employee.LastName}}</td>
                    <td>{{employee.Gender}}</td>
                    <td>{{employee.Salary}}</td>
                </tr>


# Handling event in angularjs: we use ng-click directive to handle clicks.
						 <input type="button" value="Like" ng-click="techlike(tech)" />
					