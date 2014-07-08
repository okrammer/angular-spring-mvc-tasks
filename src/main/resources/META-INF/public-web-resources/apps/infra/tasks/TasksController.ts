/// <reference path="../_reference.ts" />
module tasks {

    export class TasksController {

        static $inject = ['$scope', 'tasksRepository'];

        constructor($scope: IXScope, tasksRepository: TasksRepository) {
            var tasks = $scope.prop<Task[]>('tasks', []);
            var taskName = $scope.prop<string>('taskName', null);

            var priorities = $scope.prop<Priority[]>('priorities', Priority.values());
            var taskPriority = $scope.prop<Priority>('taskPriority', Priority.DEFAULT);

            function addTask(){
                var task = tasksRepository.newTask(taskName.get(), taskPriority.get());
                tasks.setFromPromise(tasksRepository.addTask(task));
            }

            function deleteTask(task: Task){
                tasks.setFromPromise(tasksRepository.deleteTask(task));
            }

            $scope['addTask'] = addTask;
            $scope['deleteTask'] = deleteTask;
            tasks.setFromPromise(tasksRepository.get());
        }
    }
}
