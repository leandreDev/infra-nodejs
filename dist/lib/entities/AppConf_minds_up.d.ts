import { Entity_application_configuration } from "./application_configuration";
/**
  config de l'app minds up
*/
export declare class Entity_AppConf_minds_up extends Entity_application_configuration {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkintroTitle(val: any, path?: string): string[];
    static checkintroText(val: any, path?: string): string[];
    static checkvideoUrl(val: any, path?: string): string[];
    static checkrgpd(val: any, path?: string): string[];
    static checkserviceMindsUpUrl(val: any, path?: string): string[];
    static checkmanagerObservable(val: any, path?: string): string[];
    static checkmanagerAutoExchange(val: any, path?: string): string[];
    static checkapiUrl(val: any, path?: string): string[];
    static checkmodule360(val: any, path?: string): string[];
    static checkmoduleRepo(val: any, path?: string): string[];
    static checkmoduleProgress(val: any, path?: string): string[];
    static checklang(val: any, path?: string): string[];
    static checkcollaborateurAnonyme(val: any, path?: string): string[];
    static checkemailValidator(val: any, path?: string): string[];
    static checkemailValidatorErrorMessage(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
