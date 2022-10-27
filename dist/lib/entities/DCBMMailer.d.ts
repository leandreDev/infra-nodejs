import { Entity } from "@leandredev/utils";
/**
  configuration pour l'envoie d emails DCBM
*/
export declare class Entity_DCBMMailer extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checksenderEMail(val: any, path?: string): string[];
    static checksenderName(val: any, path?: string): string[];
    static checkdcbmBaseUrl(val: any, path?: string): string[];
    static checkdcbmSendgridApiUrl(val: any, path?: string): string[];
    static checkdcbmContactMail(val: any, path?: string): string[];
    static checkdcbm_group_resset_password(val: any, path?: string): string[];
    static checkdcbm_group_welcome(val: any, path?: string): string[];
    static checkdcbm_contact_to_user(val: any, path?: string): string[];
    static checkdcbm_contact_to_dcbm(val: any, path?: string): string[];
    static checkdcbm_group_welcome_admin_templateId(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
