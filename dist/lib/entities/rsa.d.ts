import { Entity_certificat } from "./certificat";
/**
  certificat RSA
*/
export declare class Entity_rsa extends Entity_certificat {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkkty(val: any, path?: string): string[];
    static checkuse(val: any, path?: string): string[];
    static checkd(val: any, path?: string): string[];
    static checkdp(val: any, path?: string): string[];
    static checkdq(val: any, path?: string): string[];
    static checke(val: any, path?: string): string[];
    static checkn(val: any, path?: string): string[];
    static checkp(val: any, path?: string): string[];
    static checkq(val: any, path?: string): string[];
    static checkqi(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
