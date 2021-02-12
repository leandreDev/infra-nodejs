import { Entity } from "@hfdev/utils";
/**
  stock de licence distribuable
*/
export declare class Entity_licenceStore extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checknbLicence(val: any, path?: string): string[];
    static checklicenceTemplate(val: any, path?: string): string[];
    static checkautoAssign(val: any, path?: string): string[];
    static checkvalidytyStartDate(val: any, path?: string): string[];
    static checkvalidityEndDate(val: any, path?: string): string[];
    static checkdistributionPeriode(val: any, path?: string): string[];
    static checkname(val: any, path?: string): string[];
    static checknbLicenceOriginal(val: any, path?: string): string[];
    static checkref(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
