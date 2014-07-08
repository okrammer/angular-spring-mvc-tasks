/// <reference path="_reference.ts" />
angular.module("simple-tasks", []).controller("tasksController", function($scope, $http){
    $scope.tasks = [];

    $http.get("/rest/task/get").then(function(response){
        $scope.tasks = response.data
    });
});