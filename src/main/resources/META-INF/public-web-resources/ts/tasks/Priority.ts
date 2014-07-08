module tasks {
    export class Priority {

        private static _values: { [key:string]:Priority; } = {};

        static values(): Priority[] {
            return Object.keys(Priority._values).map(key => Priority._values[key])
        }

        static forName(name: string): Priority {
            return Priority._values[name];
        }

        constructor(public name: string, public level: number){
            Priority._values[name] = this;
        }

        static LOW = new Priority("LOW", -1);
        static DEFAULT = new Priority("DEFAULT", 0);
        static HIGH = new Priority("HIGH", 1);
    }

}
