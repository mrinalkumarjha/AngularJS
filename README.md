# AngularJS

AngularJs is binding framework used to bind javascript objects to html UI. In simple word it is a binding framework. angularjs took birth inside google in 2009.
it was developed by two developer Misko Hevery and Adam Abrons.

To build angularjs application we need only one file (angular.js) . To get the script file visit angularjs.org
https://angularjs.org/

# Why angular? What does binding framework mean ?
  
  In traditional javascript app, developer used to bind ui to object and vice versa like below.
  
   // in javascript there is no concept of class . function is treated as class.
        function Customer() {
            this.CustomerName = "mrinal";
            this.CustomerCode = "C001";
        }

        var custObj = new Customer();

        function UiToObject() {
            custObj.CustomerName = document.getElementById('CustomerName').value;
            custObj.CustomerCode = document.getElementById('CustomerCode').value;
        }

        function ObjectToUi() {
            document.getElementById('divCustomerName').innerHTML = custObj.CustomerName;
            document.getElementById('divCustomerCode').innerHTML = custObj.CustomerCode;
        }
		
		But as angular is binding framework angular help us to bind ui to object by minimum code like this.. We can see how binding code has been simplified.
		<!-- ng-controller="Customer" means var custObj = new Customer(); -->
        <div id="CustScreen" ng-controller="Customer"> <!-- it create new instance of Customer -->
        Customer Name :- <input type="text" ng-model="CustomerName" id="CustomerName" /> <br />
        Customer Code :- <input type="text" ng-model="CustomerCode" id="CustomerCode" />
		
# Why angular tag is combination with - .

	html says if you dont want to collied with my tag so use - in your custom tag. when you define tag using - browser does not parse it as html . so any framework like angular
	knockout use -(hiphen) so that they donot clash with html.

# CDN LINK FOR ANGULARJS : https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js

# Tools important for angularjs
   1: AngularJS Batarang : for debugging value

# step to use angularjs in application
	1: add reference of your angularjs script file
	2: add ng-app attribute somewhere in html. ng-app is directive. it is a starting point of angularjs application.
	if we add ng-app in one div element so everything inside that div will be managed by angular now. if we add ng-app
	in body then angular is responsible for handling all element expression inside body. Angular internally creates $rootscope for ng-app in dom.
	
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
			in view. $scope  is service. whatever you see with $ is angular readymade services.
 
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
						 
# In javascript there is no concept of class . function is treated as class.
        function Customer() {
            this.CustomerName = "mrinal";
            this.CustomerCode = "C001";
        }
		// Object creation
        var custObj = new Customer();
					
# Angularjs Digest cycle.
	when we see updated model value in expression {{name}} it happens due to angular digest cycle. whenever there are any changes in model there are some kind
	of event raised by model internally and it starts digest cycle. digest cycle search all watcher connected to model. it trigger watcher and watcher
	says about particular expression which need to be updated.
	
	whenever there are change in model, $.apply() method called and it start digest cycle with $.digest() method. Watcher runs each time when we update textbox.
	
	When we type something in textbox it simply compare value with old value and if value is same from last one it does not fire digest cycle.
	
	normally each model and expression has a watcher associated with it. so no of field increase watcher increase and cause performance impact. so we need to eliminate watcher by
	applying :: for one time data which dont need to be updated on dom after loading.
	ex: {{::SalesDateTime}}
	for a property which is readonly field in ui just add :: before it. so what will happened is on very first load one watcher will be attached to it but for subsequent digest cycle
	no watcher will be attached to this one time property.
	
	> custome watcher. it is used when we add watch on variable.
	
	// custom watcher
            $scope.$watch(`CustomerAmount`, function () {
                if ($scope.CustomerAmount > 100) {
                    $scope.CustomerAmountColor = `Green`;
                }
                else {
                    $scope.CustomerAmountColor = `Blue`;
                }

            })


# Service and factory:
	In angular basically there are three component , first html which is ui, second modal for object and third one is binding code used to bind model to ui. so we should keep
	all three layer seperately so that in future we can easily replace any binding framework like angular. for example before some time knockout were used as binding framework,now
	angular is being used so after some time suppose some other framework comes then if we create loosly coupled architecture we can easily replace any binding framework.
	
	// service is way we can create global object and any class can inject it. here single instance will be injected to client injector. this is similar to singalton in c#.
	// we will use service for infrastructure class like utility.
	
	 var myApp = angular.module("MyApp", []);
        myApp.controller("BindingCode", BindingCode); // here we are registering it as CustomerObj
        myApp.service(`CustomerObj`, Customer);  // here we are adding CustomerObj as object of Customer . now it can be injected in any class.
		
   // If we want different different instance to be created we will use factory method. this is similar to factory pattern.
   // we use factory for domain class. it allow decoupling
   
    var myApp = angular.module("MyApp", []);
        myApp.controller("BindingCode", BindingCode); // here we are registering it as CustomerObj
        myApp.factory(`CustomerObj`, Customer);  // for mul instance
        myApp.service(`UtilityObj`, Utility);  // for singal instance
		
		
# making http call from angularjs:		
	when you make call from one domain to another domanin it will give you cors error . it is by design due to security concern. we can add some configuration in webapi to allow 
	cross domain calls. add following inside system.webserver. cors can only be enabled in webapi not on client.
	
	<httpProtocol>
			  <customHeaders>
				  <add name="Access-Control-Allow-Origin" value="*"/>
				  <add name="Access-Control-Allow-Headers" value="Content-Type"/>
				  <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS"/>
			  </customHeaders>
		  </httpProtocol>
		  
		  and add following in global.asax
		  
		   /// <summary>
        /// this method fires everytime when request comes to iis.
        /// </summary>
        protected void Application_BeginRequest()
        {
            // we added this code to not send any response to client in case of option request
            if(Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
            {
                Response.Flush();
            }
        }
		  
		  
	When http call happens in same domain it happens very straight forward. but when cross domain call things strart getting complicated. in cross domain call one more extra call
	is added called pre-flight call.
	sot first call by client is to server is to ask server which option you have allowed on server. so depending on what you have enabled on web config file. like get, post it 
	sends the list to client.
	After that call client makes main call like post , get .
	So do remember is when you do cross domain call one extra call is pre-flight call with options to ask server for list of enabled operations.  to handle pre flight call
	we need to add some code to application startup 
	
	
	
 