import { Entity } from "@leandredev/utils";
/**
  configurationpour l'envoie d emails R3
*/
export declare class Entity_R3Mailer extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checksenderEMail(val: any, path?: string): string[];
    static checksenderName(val: any, path?: string): string[];
    static checkr3BaseUrl(val: any, path?: string): string[];
    static checkr3SendgridApiUrl(val: any, path?: string): string[];
    static checkr3ContactMail(val: any, path?: string): string[];
    static checkr3_group_resset_password(val: any, path?: string): string[];
    static checkr3_group_welcome(val: any, path?: string): string[];
    static checkr3_contact_to_user(val: any, path?: string): string[];
    static checkr3_contact_to_r3(val: any, path?: string): string[];
    static checkR3_prescriptor_invitation(val: any, path?: string): string[];
    static checkR3_analisys_end_to_r3_and_partner(val: any, path?: string): string[];
    static checkR3_analisys_end_to_user(val: any, path?: string): string[];
    static checkR3_partner_admin_created(val: any, path?: string): string[];
    static checkr3_group_welcome_admin_templateId(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
