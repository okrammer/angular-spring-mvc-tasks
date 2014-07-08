/// <reference path="../_reference.ts" />
module tasks {
    export class TasksRepository {
        constructor(private $http:ng.IHttpService) {
        }

        get():ng.IPromise<Task[]> {
            return this.$http.get("/rest/task/get").then(this.mapTaskListResponse);
        }

        newTask(name: string, priority: Priority): Task {
            return new Task(this.guid(), name, priority, new Date());
        }

        addTask(task: Task) {
            return this.$http.post("/rest/task/add", task.toObject()).then(this.mapTaskListResponse);
        }

        deleteTask(task: Task) {
            return this.$http.delete("/rest/task/delete/" + task.id).then(this.mapTaskListResponse);
        }

        mapTaskListResponse(response:ng.IHttpPromiseCallbackArg<any[]>) {
            var tasks = response.data.map((obj) => {
                var task = Task.fromObject(obj);
                return task;
            });
            return tasks;
        }

        guid():string {

            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    }
}
