import { Entity_application_configuration } from "./application_configuration";
/**
  c'est la configuration d'une application Apprenant
*/
export declare class Entity_application_configuration_appApprenant extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkforumUrl(val: any, path?: string): string[];
    static checkfileServiceUrl(val: any, path?: string): string[];
    static checkURL_FileService(val: any, path?: string): string[];
    static checkconfigurationUrlDb(val: any, path?: string): string[];
    static checkurlBase(val: any, path?: string): string[];
    static checklikeServiceUrl(val: any, path?: string): string[];
    static checkaclTemplate(val: any, path?: string): string[];
    static checktrainingCourseServiceUrl(val: any, path?: string): string[];
    static checksyncSoketioUrl(val: any, path?: string): string[];
    static checksyncSoketioPath(val: any, path?: string): string[];
    static checktutorVideoCallUrl(val: any, path?: string): string[];
    static checktutorServiceUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
