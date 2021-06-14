
var myApp=angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',
function($scope,$http){
	console.log("Hello World From controller");
var refresh=function(){
	$http.get('/contactList').then(function(response){
	
	console.log(response);
	$scope.contactList=response.data;
})
};
refresh();
	$scope.contact={
		name:'',
		email:'',
		number:''
	};
	$scope.addContact=function(){
		debugger;
		console.log($scope.contact._id);
		console.log($scope.contact);
		$scope.contact1={
			name:$scope.contact.name,
		   email:$scope.contact.email,
		number:$scope.contact.number
		}
		$http.post('/contactList',$scope.contact1).then(function(response){
			console.log(response)
			refresh();
		});
	};
	$scope.remove=function(id){
		debugger;
		console.log(id);
		$http.delete('/contactList/'+id).then(function(response){
			console.log(response);
	$scope.contact=response.data;
			refresh();
		});
	};
	
	$scope.edit=function(id){
		debugger;
		console.log(id);
		$http.get('/contactList/' +id).then(function(response){
			console.log(response);
			$scope.contact=response.data;
			});
	};
	$scope.update=function(id){
		debugger;
		console.log(id);
		console.log($scope.contact._id);
		$http.put('/contactList/' + id,$scope.contact).then(function(response){
			console.log(response);

			refresh();

		});
	};
	
	}]);