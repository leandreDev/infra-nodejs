import { Entity } from "@leandredev/utils";
/**
  les paramètres d’environnement a passer aux sous-processus
*/
export declare class Entity_node_fork_option_env extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkCONF_URL(val: any, path?: string): string[];
    static checkSRV_ID(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
