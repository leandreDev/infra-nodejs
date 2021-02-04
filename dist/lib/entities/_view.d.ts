import { Entity } from "utils";
/**
  créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
*/
export declare class Entity__view extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkdescription(val: any, path?: string): string[];
    static checkoutput(val: any, path?: string): string[];
    static checkmodel(val: any, path?: string): string[];
    static checkpipeline(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
