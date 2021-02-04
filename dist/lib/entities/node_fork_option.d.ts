import { Entity } from "utils";
/**
  option d'un sous processus node
*/
export declare class Entity_node_fork_option extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkcwd(val: any, path?: string): string[];
    static checkenv(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
