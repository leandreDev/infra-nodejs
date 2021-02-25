import { Entity } from "@leandredev/utils";
/**
  un noeud de menu de mongoEditor
*/
export declare class Entity_ui_menu_mongo_editor extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklabel(val: any, path?: string): string[];
    static checkpath(val: any, path?: string): string[];
    static checkicon(val: any, path?: string): string[];
    static checkchild(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
