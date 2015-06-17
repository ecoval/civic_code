angular.module('starter.controllers', ['ionic'])
.constant('FORECASTIO_KEY', 'dce555f81a9f3ef9ece819b8c579db8d')
.controller('HomeCtrl', function($scope,$state,Weather,DataStore) 
{
  //read deffault setting into scope
console.log('inside home');
$scope.city = DataStore.city;
var latitude = DataStore.latitude;
var longitude = DataStore.longitude;

//call getCurrentWeather method in factory 'Weather'
Weather.getCurrentWeather(latitude,longitude).then(function(response){
  $scope.current = response.data;
  conscole.log('GOT CURRENT', $scope.current);
  //debugger;
}, function(error) {alert('Unable to get current conditions');
console.error(error);
});
})
.controller('LocstionsCtrl', function($scope,$state,Cities,DataStore){
$scope.cities = Cities.all();

})

