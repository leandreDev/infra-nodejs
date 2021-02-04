import { Entity_service } from "./service";
/**
  c'est le service de distribution des configurations des services
*/
export declare class Entity_service_configuration extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checksrvUrl(val: any, path?: string): string[];
    static checkserviceCollectionName(val: any, path?: string): string[];
    static checkserviceConfigCollectionName(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
