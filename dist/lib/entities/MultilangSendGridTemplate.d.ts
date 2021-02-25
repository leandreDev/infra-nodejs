import { Entity } from "@leandredev/utils";
/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
export declare class Entity_MultilangSendGridTemplate extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checksendGridTemplates(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
