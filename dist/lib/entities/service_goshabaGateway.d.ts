import { Entity_service } from "./service";
/**
  passerelle pour goshaba
*/
export declare class Entity_service_goshabaGateway extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkprivateKey(val: any, path?: string): string[];
    static checkpackUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
