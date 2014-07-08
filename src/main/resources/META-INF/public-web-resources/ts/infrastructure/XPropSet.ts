module tasks {
    export class XPropSet {
        constructor(private props: XProp<{}>[], private $scope: IXScope) {
        }

        watch(fn: () => void){
            this.$scope.$watch(this.props.map((prop)=> prop.name).join(","), fn);
        }

        and(prop: XProp<{}>){
            return new XPropSet(this.props.concat([prop]), this.$scope);
        }
    }
}
