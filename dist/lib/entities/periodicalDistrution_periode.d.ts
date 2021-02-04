import { Entity_periodicalDistrution } from "./periodicalDistrution";
/**
  permet de créer une plage de date de distribution
*/
export declare class Entity_periodicalDistrution_periode extends Entity_periodicalDistrution {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkstartDate(val: any, path?: string): string[];
    static checkendDate(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
