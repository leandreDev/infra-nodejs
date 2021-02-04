import { Entity_periodicalDistrution } from "./periodicalDistrution";
/**
  permet de limiter la distribution chaque jour du mois
*/
export declare class Entity_periodicalDistrution_month extends Entity_periodicalDistrution {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkstartDay(val: any, path?: string): string[];
    static checkendDay(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
