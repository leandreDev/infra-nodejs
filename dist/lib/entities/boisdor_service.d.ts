import { Entity_service } from "./service";
/**
  service métier de boisdor
*/
export declare class Entity_boisdor_service extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkboisdorBddUrl(val: any, path?: string): string[];
    static checkssoApiUrl(val: any, path?: string): string[];
    static checklicenceApiUrl(val: any, path?: string): string[];
    static checksendgridApiUrl(val: any, path?: string): string[];
    static checkappId(val: any, path?: string): string[];
    static checkend_client(val: any, path?: string): string[];
    static checklicenceStoreId(val: any, path?: string): string[];
    static checkssoBddUrl(val: any, path?: string): string[];
    static checkclient_id(val: any, path?: string): string[];
    static checkclient_secret(val: any, path?: string): string[];
    static checksellerAppId(val: any, path?: string): string[];
    static checksellerLicenceStoreId(val: any, path?: string): string[];
    static checkadminAppId(val: any, path?: string): string[];
    static checkadminLicenceStoreId(val: any, path?: string): string[];
    static checkinfraBddUrl(val: any, path?: string): string[];
    static checksellerSso_Client_template(val: any, path?: string): string[];
    static checksellerEndClientTemplate(val: any, path?: string): string[];
    static checksellerAppInstanceTemplate(val: any, path?: string): string[];
    static checkresetPasswordRedirect(val: any, path?: string): string[];
    static checksendgrid_conf(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
