import { Entity_mail } from "./mail";
/**
  objet envoyé a l'api sendgrid
*/
export declare class Entity_mail_sendgrid extends Entity_mail {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkcontent(val: any, path?: string): string[];
    static checkfrom(val: any, path?: string): string[];
    static checkpersonalizations(val: any, path?: string): string[];
    static checkreply_to(val: any, path?: string): string[];
    static checksubject(val: any, path?: string): string[];
    static checksend_at(val: any, path?: string): string[];
    static checktemplate_id(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
