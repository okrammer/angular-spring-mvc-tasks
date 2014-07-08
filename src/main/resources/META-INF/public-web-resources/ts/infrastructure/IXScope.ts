/// <reference path="../_reference.ts" />
module tasks {
    export interface IXScope extends ng.IScope{
        prop<T>(name: string, defaultValue: T): XProp<T>
        callback<T extends Function>(fn:T): T
        method(fn:Function)
    }
}
