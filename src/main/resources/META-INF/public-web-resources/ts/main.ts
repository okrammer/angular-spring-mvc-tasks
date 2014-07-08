/// <reference path="_import.ts" />
/// <reference path="_reference.ts" />
module tasks {

    angular.module("tasks", [])
    .run(ScopeConfigurer)
    .service('tasksRepository', TasksRepository)
    .controller('tasksController', TasksControllerSimple)


}