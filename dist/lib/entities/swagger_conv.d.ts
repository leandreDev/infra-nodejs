import { Entity_service } from "./service";
/**
  convertisseur de swagger
*/
export declare class Entity_swagger_conv extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkurlBdd(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
