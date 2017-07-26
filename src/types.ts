export type JsonValuePrimitive = string | number | boolean | null;
export interface JsonValueObject {
    [x:string]:JsonValue;
}
export interface JsonValueArray extends Array<JsonValue> {}

export type JsonValue = JsonValuePrimitive | JsonValueObject | JsonValueArray;

export interface ParameterlessConstructor<T> {
    name?:string;
    new():T;
}

export interface IDynamicObject {
    constructor:Function;
    [name:string]:any;
}

export interface IParseOptions {
    runConstructor?:boolean;
}