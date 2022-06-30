import { Entity } from "@leandredev/utils";
/**
  Configuration pour les automation des services qbp
*/
export declare class Entity_ConfAutomation extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkdatesForGeneratePayout(val: any, path?: string): string[];
    static checkdatesForGenerateInvoice(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
