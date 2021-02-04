import { Entity_periodicalDistrution } from "./periodicalDistrution";
/**
  journée autorisé
*/
export declare class Entity_periodicalDistrution_day extends Entity_periodicalDistrution {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklundi(val: any, path?: string): string[];
    static checkmardi(val: any, path?: string): string[];
    static checkmercredi(val: any, path?: string): string[];
    static checkjeudi(val: any, path?: string): string[];
    static checkvendredi(val: any, path?: string): string[];
    static checksamedi(val: any, path?: string): string[];
    static checkdimanche(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
