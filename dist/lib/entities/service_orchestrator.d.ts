import { Entity_service } from "./service";
/**
  service d'orchestration
*/
export declare class Entity_service_orchestrator extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkapiUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
