import { Entity } from "@leandredev/utils";
/**
  configuration pour l'envoie d emails QBP
*/
export declare class Entity_QbpMailer extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkqbpEmailContact(val: any, path?: string): string[];
    static checksenderEmail(val: any, path?: string): string[];
    static checksenderName(val: any, path?: string): string[];
    static checkqbpBaseUrl(val: any, path?: string): string[];
    static checkqbpSendgridApiUrl(val: any, path?: string): string[];
    static checkorderCanceled(val: any, path?: string): string[];
    static checkorderDeliveryDelais(val: any, path?: string): string[];
    static checkafterSalesRequest(val: any, path?: string): string[];
    static checkfourteenDaysBackPickingConfirmed(val: any, path?: string): string[];
    static checkfourteenDaysBackRefundAccepted(val: any, path?: string): string[];
    static checkfourteenDaysBackShippingLabel(val: any, path?: string): string[];
    static checkfourteenDaysBackRequest(val: any, path?: string): string[];
    static checkfourteenDaysBackRefusal(val: any, path?: string): string[];
    static checkfourteenDaysBackRefund(val: any, path?: string): string[];
    static checkafterSalesAccepted(val: any, path?: string): string[];
    static checkafterSalesShippingLabel(val: any, path?: string): string[];
    static checkafterSalesPickingConfirmed(val: any, path?: string): string[];
    static checkafterSalesDelivered(val: any, path?: string): string[];
    static checkafterSalesRefusal(val: any, path?: string): string[];
    static checkafterSalesVendorRefusal(val: any, path?: string): string[];
    static checkorderPreparation(val: any, path?: string): string[];
    static checkorderDelivered(val: any, path?: string): string[];
    static checkerrorPasswordCustomer(val: any, path?: string): string[];
    static checkrefund(val: any, path?: string): string[];
    static checkinfoShipmentCustomer(val: any, path?: string): string[];
    static checkcreationAccountCustomer(val: any, path?: string): string[];
    static checkorderShipped(val: any, path?: string): string[];
    static checkcustomerReview(val: any, path?: string): string[];
    static checksellerCustomerRequest(val: any, path?: string): string[];
    static checkqbpRamassesDpd(val: any, path?: string): string[];
    static checksellerOrderPreparation(val: any, path?: string): string[];
    static checkqbpProductRequest(val: any, path?: string): string[];
    static checkconfirmOrderCustomer(val: any, path?: string): string[];
    static checknotifyDpd(val: any, path?: string): string[];
    static checksellerMessage(val: any, path?: string): string[];
    static checkcustomerContactMessage(val: any, path?: string): string[];
    static checkcontactMessage(val: any, path?: string): string[];
    static checkcustomerInvoiceRequest(val: any, path?: string): string[];
    static checkafterSalesMessageCustomer(val: any, path?: string): string[];
    static checkafterSalesMessageSeller(val: any, path?: string): string[];
    static checkqbpRelaisRamassesDpd(val: any, path?: string): string[];
    static checkqbpAfterSalesClose(val: any, path?: string): string[];
    static checkqbpBankWireInformations(val: any, path?: string): string[];
    static checkbankWirePayinError(val: any, path?: string): string[];
    static checkretractationDeliveredToSeller(val: any, path?: string): string[];
    static checksavReturnDeliveredToSeller(val: any, path?: string): string[];
    static checkfourteenDaysBackConfirmation(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}