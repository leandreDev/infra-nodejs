import { Entity_service } from "./service";
/**
  Service pour gérer les notifications push des applications
*/
export declare class Entity_service_push_notification extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
