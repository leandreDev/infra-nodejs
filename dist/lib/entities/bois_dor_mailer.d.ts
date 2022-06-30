import { Entity } from "@leandredev/utils";
/**
  liste de tous les templates de mail pour bois d'or
*/
export declare class Entity_bois_dor_mailer extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkcomptoirOr_info(val: any, path?: string): string[];
    static checkboisdor_fr_orderDelivred(val: any, path?: string): string[];
    static checkboisdor_fr_orderRegister(val: any, path?: string): string[];
    static checkboisdor_fr_resetPassword(val: any, path?: string): string[];
    static checkboisdor_fr_accountCreated(val: any, path?: string): string[];
    static checkboisdor_fr_orderRefund(val: any, path?: string): string[];
    static checkboisdor_fr_orderCancelled(val: any, path?: string): string[];
    static checkboisdor_fr_orderValidatedForDelivery(val: any, path?: string): string[];
    static checkboisdor_fr_orderValidatedForPickup(val: any, path?: string): string[];
    static checkboisdor_fr_orderToCustomer(val: any, path?: string): string[];
    static checkboisdor_fr_orderToSeller(val: any, path?: string): string[];
    static checkboisdor_fr_sav(val: any, path?: string): string[];
    static checkboisdor_fr_contact(val: any, path?: string): string[];
    static checkboisdor_fr_reply_sav(val: any, path?: string): string[];
    static checkboisdor_fr_reply_contact(val: any, path?: string): string[];
    static checkboisdor_fr_orderToCustomerPending(val: any, path?: string): string[];
    static checkboisdor_fr_orderToCustomerDiff(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}
