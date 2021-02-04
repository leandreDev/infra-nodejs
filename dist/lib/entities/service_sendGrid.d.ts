import { Entity_service } from "./service";
/**
  permet d'envoyer des mail via l'api send grid v3
*/
export declare class Entity_service_sendGrid extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checksendGridApiKey(val: any, path?: string): string[];
    static checkmessageUrl(val: any, path?: string): string[];
    static checkuserUrl(val: any, path?: string): string[];
    static checktemplates(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
