import { Entity } from "utils";
/**
  template send grid
*/
export declare class Entity_sendGridTemplate extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklang(val: any, path?: string): string[];
    static checktemplateId(val: any, path?: string): string[];
    static checkparametre(val: any, path?: string): string[];
    static checkdynamic_template_data(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
