To build angularjs application we need only one file (angular.js) . To get the script file visit angularjs.org
https://angularjs.org/

2: CDN LINK FOR ANGULARJS : https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js

3: step to use angularjs in application
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
	
4: Module and Controller in angularjs:
	
	Module: Module is container for different part of your application. ie: controllers, services, directives, filters etc.
	you can think module as a main method in other type of application.
	
	How to create a module:
							Use the angular objects module method to create module.
							ex: var myapp = angular.module("MyModuleName", [dependencylist])
							a module can depend on another module also. if a module is not depend on any other module
							keep second parameter empty.
							
	Controller: In angular controller is a javascript function. The job of controller is to build a model for view to display.
	a controller may call webservice
							
	
