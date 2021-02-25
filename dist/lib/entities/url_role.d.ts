import { Entity } from "@leandredev/utils";
/**
  règle de sécurité relative aux url
*/
export declare class Entity_url_role extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check_$get(val: any, path?: string): string[];
    static check_$post(val: any, path?: string): string[];
    static check_$delete(val: any, path?: string): string[];
    static check_$put(val: any, path?: string): string[];
    static check_$patch(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
