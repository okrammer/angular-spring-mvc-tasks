/// <reference path="../_reference.ts" />
module tasks {

    export interface TasksControllerScope {
        tasks: Task[]
        taskName: string
        priorities: Priority[]
        taskPriority: Priority
        addTask: ()=>void
        deleteTask: (task:Task)=>void

    }

    export class TasksControllerSimple {

        static $inject = ['$scope', 'tasksRepository'];

        constructor($scope:TasksControllerScope, tasksRepository:TasksRepository) {

            // functions
            function setTasksByPromise(promise:ng.IPromise<Task[]>) {
                promise.then((tasks:Task[]) => {
                    $scope.tasks = tasks;
                });
            }

            function addTask() {
                var task = tasksRepository.newTask($scope.taskName, $scope.taskPriority);
                var tasksPromise = tasksRepository.addTask(task);
                setTasksByPromise(tasksPromise);
            }

            function deleteTask(task:Task) {
                var tasksPromise = tasksRepository.deleteTask(task);
                setTasksByPromise(tasksPromise);
            }

            // bind functions for scope
            $scope.addTask = addTask;
            $scope.deleteTask = deleteTask;

            // setup scope
            $scope.taskPriority = Priority.DEFAULT;
            $scope.tasks = [];
            $scope.priorities = Priority.values();
            $scope.taskName = null;

            // load initial content
            setTasksByPromise(tasksRepository.get());
        }
    }
}
