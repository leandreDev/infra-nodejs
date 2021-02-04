import { Entity_service } from "./service";
/**
  service de gestion des parcourts de formation
*/
export declare class Entity_service_trainingCoursesService extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkapiSession(val: any, path?: string): string[];
    static checklicenceServiceUrl(val: any, path?: string): string[];
    static checktaskServiceUrl(val: any, path?: string): string[];
    static checkmailServiceUrl(val: any, path?: string): string[];
    static checkclientInfraUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
