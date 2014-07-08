/// <reference path="../_reference.ts" />
module tasks {

    export class ScopeConfigurer {
        static $inject = ["$rootScope", "$timeout", '$q'];

        constructor($rootScope:ng.IScope, $timeout:ng.ITimeoutService, $q:ng.IQService) {
            angular.extend($rootScope, {
                    callback: function (fn:Function) {
                        return () => {
                            var args:any = arguments;
                            $timeout(
                                () => $rootScope.$apply(
                                    () => fn.apply(null, args)
                                )
                            )
                        }
                    },

                    prop: function (name:string, defaultValue:any) {
                        return  new XProp(<IXScope>this, name, defaultValue);
                    },

                    method: function (fn:Function) {
                        var name = fn.toString().match(/^function\s*([^\s(]+)/)[1];
                        if (!name) {
                            throw new Error("function is not defined with name.")
                        }
                        $rootScope[name] = fn;
                    }

                }
            )
        }

    }
}