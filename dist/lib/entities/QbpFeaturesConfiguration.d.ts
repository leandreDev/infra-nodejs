import { Entity } from "@leandredev/utils";
/**
  liste de functionalites pouvant etre actives ou desactives
*/
export declare class Entity_QbpFeaturesConfiguration extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbankWire(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
