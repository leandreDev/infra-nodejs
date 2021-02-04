import { Entity_service } from "./service";
/**
  Service de Taches planifiées
*/
export declare class Entity_service_planned_tasks extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkbdd_url(val: any, path?: string): string[];
    static checkhandlerInterval(val: any, path?: string): string[];
    static checkstartHandlingOnServiceStart(val: any, path?: string): string[];
    static checkschedule_url(val: any, path?: string): string[];
    static checktask_url(val: any, path?: string): string[];
    static checklicencesService_url(val: any, path?: string): string[];
    static checkapiUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
