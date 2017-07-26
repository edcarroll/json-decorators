import { getDefinition } from "../classes/object-definition";

// tslint:disable:ext-variable-name only-arrow-functions

export function JsonDiscriminatorValue(value:any):PropertyDecorator {
    return function(constructor:Function):void {
        getDefinition(constructor).discriminatorValue = value;
    };
}
