module tasks {
    export class Task {

        static fromObject(obj) {
            return new Task(obj.id, obj.name, Priority.forName(<string>obj.priority), new Date(<number>obj.dueDate));
        }

        constructor(public id: string,
                    public name:string,
                    public priority: Priority,
                    public  dueDate: Date) {
        }

        toObject(){
            return {id: this.id, name: this.name, priority: this.priority.name, dueDate: this.dueDate.getTime()};
        }
    }

}
