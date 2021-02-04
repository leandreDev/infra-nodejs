import { Entity_service } from "./service";
/**
  service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
*/
export declare class Entity_service_init extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
