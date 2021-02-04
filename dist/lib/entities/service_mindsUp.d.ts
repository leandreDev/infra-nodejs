import { Entity_service } from "./service";
/**
  service minds up metier
*/
export declare class Entity_service_mindsUp extends Entity_service {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkurlApi(val: any, path?: string): string[];
    static checkurlSsoApi(val: any, path?: string): string[];
    static checkurlLicenceService(val: any, path?: string): string[];
    static checkurlInfraBdd(val: any, path?: string): string[];
    static checkurlMailerService(val: any, path?: string): string[];
    static checkurlPdfrip(val: any, path?: string): string[];
    static checkreportUrl(val: any, path?: string): string[];
    static checkurlFsoService(val: any, path?: string): string[];
    static checkapplicationClienteConfig(val: any, path?: string): string[];
    static checkapplicationAdminConfig(val: any, path?: string): string[];
    static checkftpConf(val: any, path?: string): string[];
    static checkappId(val: any, path?: string): string[];
    static checkadminAppId(val: any, path?: string): string[];
    static checkend_client(val: any, path?: string): string[];
    static checklicenceStoreId(val: any, path?: string): string[];
    static checkadminLicenceStoreId(val: any, path?: string): string[];
    static checkemailSenderName(val: any, path?: string): string[];
    static checkemailSenderEmail(val: any, path?: string): string[];
    static checkmailIRelance360(val: any, path?: string): string[];
    static checkmailInvitation360(val: any, path?: string): string[];
    static checkmailInvitationCampaign360(val: any, path?: string): string[];
    static checkmailCreation360(val: any, path?: string): string[];
    static checkappName(val: any, path?: string): string[];
    static checkappUrl(val: any, path?: string): string[];
    static checkmailInquiry360UserResponseInfo(val: any, path?: string): string[];
    static checkmailInquiry360UserResponse(val: any, path?: string): string[];
    static checklangUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
