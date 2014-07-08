/// <reference path="../_reference.ts" />
module tasks {
    export class XProp<T> {

        constructor(private $scope: IXScope, public name: string, defaultValue:T){
            this.set(defaultValue);
        }

        get(): T {
            return this.$scope[this.name];
        }

        set(value: T){
            this.$scope[this.name] = value;
        }

        setFromPromise(promise: ng.IPromise<T>){
            promise.then((value: T)=> this.set(value));
        }

        watch(fn: (newValue: T, oldValue:T) => void){
            this.$scope.$watch(this.name, fn);
        }

        and(prop: XProp<T>){
            return new XPropSet([this, prop], this.$scope);
        }
    }
}
