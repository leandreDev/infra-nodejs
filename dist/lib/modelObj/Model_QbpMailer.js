"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_QbpMailer = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  configuration pour l'envoie d emails QBP
*/
class Model_QbpMailer extends utils_1.Base {
    /**
      configuration pour l'envoie d emails QBP
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "QbpMailer";
        /**
  Notifié DPD pour un enlévement
  */
        this["notifyDpd"] = false;
        if (obj["qbpEmailContact"] != undefined) {
            this["qbpEmailContact"] = obj["qbpEmailContact"].toString();
        }
        if (obj["senderEmail"] != undefined) {
            this["senderEmail"] = obj["senderEmail"].toString();
        }
        if (obj["senderName"] != undefined) {
            this["senderName"] = obj["senderName"].toString();
        }
        if (obj["qbpBaseUrl"] != undefined) {
            this["qbpBaseUrl"] = obj["qbpBaseUrl"].toString();
        }
        if (obj["qbpSendgridApiUrl"] != undefined) {
            this["qbpSendgridApiUrl"] = obj["qbpSendgridApiUrl"].toString();
        }
        if (obj["orderCanceled"] != undefined) {
            if (_.isString(obj["orderCanceled"])) {
                this["orderCanceled"] = obj["orderCanceled"];
            }
            else if (obj["orderCanceled"]._id) {
                this["orderCanceled"] = obj["orderCanceled"]._id;
            }
            else if (obj["orderCanceled"]._bsontype && (obj["orderCanceled"]._bsontype === 'ObjectID')) {
                this["orderCanceled"] = obj["orderCanceled"];
            }
        }
        if (obj["orderDeliveryDelais"] != undefined) {
            if (_.isString(obj["orderDeliveryDelais"])) {
                this["orderDeliveryDelais"] = obj["orderDeliveryDelais"];
            }
            else if (obj["orderDeliveryDelais"]._id) {
                this["orderDeliveryDelais"] = obj["orderDeliveryDelais"]._id;
            }
            else if (obj["orderDeliveryDelais"]._bsontype && (obj["orderDeliveryDelais"]._bsontype === 'ObjectID')) {
                this["orderDeliveryDelais"] = obj["orderDeliveryDelais"];
            }
        }
        if (obj["afterSalesRequest"] != undefined) {
            if (_.isString(obj["afterSalesRequest"])) {
                this["afterSalesRequest"] = obj["afterSalesRequest"];
            }
            else if (obj["afterSalesRequest"]._id) {
                this["afterSalesRequest"] = obj["afterSalesRequest"]._id;
            }
            else if (obj["afterSalesRequest"]._bsontype && (obj["afterSalesRequest"]._bsontype === 'ObjectID')) {
                this["afterSalesRequest"] = obj["afterSalesRequest"];
            }
        }
        if (obj["fourteenDaysBackPickingConfirmed"] != undefined) {
            if (_.isString(obj["fourteenDaysBackPickingConfirmed"])) {
                this["fourteenDaysBackPickingConfirmed"] = obj["fourteenDaysBackPickingConfirmed"];
            }
            else if (obj["fourteenDaysBackPickingConfirmed"]._id) {
                this["fourteenDaysBackPickingConfirmed"] = obj["fourteenDaysBackPickingConfirmed"]._id;
            }
            else if (obj["fourteenDaysBackPickingConfirmed"]._bsontype && (obj["fourteenDaysBackPickingConfirmed"]._bsontype === 'ObjectID')) {
                this["fourteenDaysBackPickingConfirmed"] = obj["fourteenDaysBackPickingConfirmed"];
            }
        }
        if (obj["fourteenDaysBackRefundAccepted"] != undefined) {
            if (_.isString(obj["fourteenDaysBackRefundAccepted"])) {
                this["fourteenDaysBackRefundAccepted"] = obj["fourteenDaysBackRefundAccepted"];
            }
            else if (obj["fourteenDaysBackRefundAccepted"]._id) {
                this["fourteenDaysBackRefundAccepted"] = obj["fourteenDaysBackRefundAccepted"]._id;
            }
            else if (obj["fourteenDaysBackRefundAccepted"]._bsontype && (obj["fourteenDaysBackRefundAccepted"]._bsontype === 'ObjectID')) {
                this["fourteenDaysBackRefundAccepted"] = obj["fourteenDaysBackRefundAccepted"];
            }
        }
        if (obj["fourteenDaysBackShippingLabel"] != undefined) {
            if (_.isString(obj["fourteenDaysBackShippingLabel"])) {
                this["fourteenDaysBackShippingLabel"] = obj["fourteenDaysBackShippingLabel"];
            }
            else if (obj["fourteenDaysBackShippingLabel"]._id) {
                this["fourteenDaysBackShippingLabel"] = obj["fourteenDaysBackShippingLabel"]._id;
            }
            else if (obj["fourteenDaysBackShippingLabel"]._bsontype && (obj["fourteenDaysBackShippingLabel"]._bsontype === 'ObjectID')) {
                this["fourteenDaysBackShippingLabel"] = obj["fourteenDaysBackShippingLabel"];
            }
        }
        if (obj["fourteenDaysBackRequest"] != undefined) {
            if (_.isString(obj["fourteenDaysBackRequest"])) {
                this["fourteenDaysBackRequest"] = obj["fourteenDaysBackRequest"];
            }
            else if (obj["fourteenDaysBackRequest"]._id) {
                this["fourteenDaysBackRequest"] = obj["fourteenDaysBackRequest"]._id;
            }
            else if (obj["fourteenDaysBackRequest"]._bsontype && (obj["fourteenDaysBackRequest"]._bsontype === 'ObjectID')) {
                this["fourteenDaysBackRequest"] = obj["fourteenDaysBackRequest"];
            }
        }
        if (obj["fourteenDaysBackRefusal"] != undefined) {
            if (_.isString(obj["fourteenDaysBackRefusal"])) {
                this["fourteenDaysBackRefusal"] = obj["fourteenDaysBackRefusal"];
            }
            else if (obj["fourteenDaysBackRefusal"]._id) {
                this["fourteenDaysBackRefusal"] = obj["fourteenDaysBackRefusal"]._id;
            }
            else if (obj["fourteenDaysBackRefusal"]._bsontype && (obj["fourteenDaysBackRefusal"]._bsontype === 'ObjectID')) {
                this["fourteenDaysBackRefusal"] = obj["fourteenDaysBackRefusal"];
            }
        }
        if (obj["fourteenDaysBackRefund"] != undefined) {
            if (_.isString(obj["fourteenDaysBackRefund"])) {
                this["fourteenDaysBackRefund"] = obj["fourteenDaysBackRefund"];
            }
            else if (obj["fourteenDaysBackRefund"]._id) {
                this["fourteenDaysBackRefund"] = obj["fourteenDaysBackRefund"]._id;
            }
            else if (obj["fourteenDaysBackRefund"]._bsontype && (obj["fourteenDaysBackRefund"]._bsontype === 'ObjectID')) {
                this["fourteenDaysBackRefund"] = obj["fourteenDaysBackRefund"];
            }
        }
        if (obj["afterSalesAccepted"] != undefined) {
            if (_.isString(obj["afterSalesAccepted"])) {
                this["afterSalesAccepted"] = obj["afterSalesAccepted"];
            }
            else if (obj["afterSalesAccepted"]._id) {
                this["afterSalesAccepted"] = obj["afterSalesAccepted"]._id;
            }
            else if (obj["afterSalesAccepted"]._bsontype && (obj["afterSalesAccepted"]._bsontype === 'ObjectID')) {
                this["afterSalesAccepted"] = obj["afterSalesAccepted"];
            }
        }
        if (obj["afterSalesShippingLabel"] != undefined) {
            if (_.isString(obj["afterSalesShippingLabel"])) {
                this["afterSalesShippingLabel"] = obj["afterSalesShippingLabel"];
            }
            else if (obj["afterSalesShippingLabel"]._id) {
                this["afterSalesShippingLabel"] = obj["afterSalesShippingLabel"]._id;
            }
            else if (obj["afterSalesShippingLabel"]._bsontype && (obj["afterSalesShippingLabel"]._bsontype === 'ObjectID')) {
                this["afterSalesShippingLabel"] = obj["afterSalesShippingLabel"];
            }
        }
        if (obj["afterSalesPickingConfirmed"] != undefined) {
            if (_.isString(obj["afterSalesPickingConfirmed"])) {
                this["afterSalesPickingConfirmed"] = obj["afterSalesPickingConfirmed"];
            }
            else if (obj["afterSalesPickingConfirmed"]._id) {
                this["afterSalesPickingConfirmed"] = obj["afterSalesPickingConfirmed"]._id;
            }
            else if (obj["afterSalesPickingConfirmed"]._bsontype && (obj["afterSalesPickingConfirmed"]._bsontype === 'ObjectID')) {
                this["afterSalesPickingConfirmed"] = obj["afterSalesPickingConfirmed"];
            }
        }
        if (obj["afterSalesDelivered"] != undefined) {
            if (_.isString(obj["afterSalesDelivered"])) {
                this["afterSalesDelivered"] = obj["afterSalesDelivered"];
            }
            else if (obj["afterSalesDelivered"]._id) {
                this["afterSalesDelivered"] = obj["afterSalesDelivered"]._id;
            }
            else if (obj["afterSalesDelivered"]._bsontype && (obj["afterSalesDelivered"]._bsontype === 'ObjectID')) {
                this["afterSalesDelivered"] = obj["afterSalesDelivered"];
            }
        }
        if (obj["afterSalesRefusal"] != undefined) {
            if (_.isString(obj["afterSalesRefusal"])) {
                this["afterSalesRefusal"] = obj["afterSalesRefusal"];
            }
            else if (obj["afterSalesRefusal"]._id) {
                this["afterSalesRefusal"] = obj["afterSalesRefusal"]._id;
            }
            else if (obj["afterSalesRefusal"]._bsontype && (obj["afterSalesRefusal"]._bsontype === 'ObjectID')) {
                this["afterSalesRefusal"] = obj["afterSalesRefusal"];
            }
        }
        if (obj["afterSalesVendorRefusal"] != undefined) {
            if (_.isString(obj["afterSalesVendorRefusal"])) {
                this["afterSalesVendorRefusal"] = obj["afterSalesVendorRefusal"];
            }
            else if (obj["afterSalesVendorRefusal"]._id) {
                this["afterSalesVendorRefusal"] = obj["afterSalesVendorRefusal"]._id;
            }
            else if (obj["afterSalesVendorRefusal"]._bsontype && (obj["afterSalesVendorRefusal"]._bsontype === 'ObjectID')) {
                this["afterSalesVendorRefusal"] = obj["afterSalesVendorRefusal"];
            }
        }
        if (obj["orderPreparation"] != undefined) {
            if (_.isString(obj["orderPreparation"])) {
                this["orderPreparation"] = obj["orderPreparation"];
            }
            else if (obj["orderPreparation"]._id) {
                this["orderPreparation"] = obj["orderPreparation"]._id;
            }
            else if (obj["orderPreparation"]._bsontype && (obj["orderPreparation"]._bsontype === 'ObjectID')) {
                this["orderPreparation"] = obj["orderPreparation"];
            }
        }
        if (obj["orderDelivered"] != undefined) {
            if (_.isString(obj["orderDelivered"])) {
                this["orderDelivered"] = obj["orderDelivered"];
            }
            else if (obj["orderDelivered"]._id) {
                this["orderDelivered"] = obj["orderDelivered"]._id;
            }
            else if (obj["orderDelivered"]._bsontype && (obj["orderDelivered"]._bsontype === 'ObjectID')) {
                this["orderDelivered"] = obj["orderDelivered"];
            }
        }
        if (obj["errorPasswordCustomer"] != undefined) {
            if (_.isString(obj["errorPasswordCustomer"])) {
                this["errorPasswordCustomer"] = obj["errorPasswordCustomer"];
            }
            else if (obj["errorPasswordCustomer"]._id) {
                this["errorPasswordCustomer"] = obj["errorPasswordCustomer"]._id;
            }
            else if (obj["errorPasswordCustomer"]._bsontype && (obj["errorPasswordCustomer"]._bsontype === 'ObjectID')) {
                this["errorPasswordCustomer"] = obj["errorPasswordCustomer"];
            }
        }
        if (obj["refund"] != undefined) {
            if (_.isString(obj["refund"])) {
                this["refund"] = obj["refund"];
            }
            else if (obj["refund"]._id) {
                this["refund"] = obj["refund"]._id;
            }
            else if (obj["refund"]._bsontype && (obj["refund"]._bsontype === 'ObjectID')) {
                this["refund"] = obj["refund"];
            }
        }
        if (obj["infoShipmentCustomer"] != undefined) {
            if (_.isString(obj["infoShipmentCustomer"])) {
                this["infoShipmentCustomer"] = obj["infoShipmentCustomer"];
            }
            else if (obj["infoShipmentCustomer"]._id) {
                this["infoShipmentCustomer"] = obj["infoShipmentCustomer"]._id;
            }
            else if (obj["infoShipmentCustomer"]._bsontype && (obj["infoShipmentCustomer"]._bsontype === 'ObjectID')) {
                this["infoShipmentCustomer"] = obj["infoShipmentCustomer"];
            }
        }
        if (obj["creationAccountCustomer"] != undefined) {
            if (_.isString(obj["creationAccountCustomer"])) {
                this["creationAccountCustomer"] = obj["creationAccountCustomer"];
            }
            else if (obj["creationAccountCustomer"]._id) {
                this["creationAccountCustomer"] = obj["creationAccountCustomer"]._id;
            }
            else if (obj["creationAccountCustomer"]._bsontype && (obj["creationAccountCustomer"]._bsontype === 'ObjectID')) {
                this["creationAccountCustomer"] = obj["creationAccountCustomer"];
            }
        }
        if (obj["orderShipped"] != undefined) {
            if (_.isString(obj["orderShipped"])) {
                this["orderShipped"] = obj["orderShipped"];
            }
            else if (obj["orderShipped"]._id) {
                this["orderShipped"] = obj["orderShipped"]._id;
            }
            else if (obj["orderShipped"]._bsontype && (obj["orderShipped"]._bsontype === 'ObjectID')) {
                this["orderShipped"] = obj["orderShipped"];
            }
        }
        if (obj["customerReview"] != undefined) {
            if (_.isString(obj["customerReview"])) {
                this["customerReview"] = obj["customerReview"];
            }
            else if (obj["customerReview"]._id) {
                this["customerReview"] = obj["customerReview"]._id;
            }
            else if (obj["customerReview"]._bsontype && (obj["customerReview"]._bsontype === 'ObjectID')) {
                this["customerReview"] = obj["customerReview"];
            }
        }
        if (obj["sellerCustomerRequest"] != undefined) {
            if (_.isString(obj["sellerCustomerRequest"])) {
                this["sellerCustomerRequest"] = obj["sellerCustomerRequest"];
            }
            else if (obj["sellerCustomerRequest"]._id) {
                this["sellerCustomerRequest"] = obj["sellerCustomerRequest"]._id;
            }
            else if (obj["sellerCustomerRequest"]._bsontype && (obj["sellerCustomerRequest"]._bsontype === 'ObjectID')) {
                this["sellerCustomerRequest"] = obj["sellerCustomerRequest"];
            }
        }
        if (obj["qbpRamassesDpd"] != undefined) {
            if (_.isString(obj["qbpRamassesDpd"])) {
                this["qbpRamassesDpd"] = obj["qbpRamassesDpd"];
            }
            else if (obj["qbpRamassesDpd"]._id) {
                this["qbpRamassesDpd"] = obj["qbpRamassesDpd"]._id;
            }
            else if (obj["qbpRamassesDpd"]._bsontype && (obj["qbpRamassesDpd"]._bsontype === 'ObjectID')) {
                this["qbpRamassesDpd"] = obj["qbpRamassesDpd"];
            }
        }
        if (obj["sellerOrderPreparation"] != undefined) {
            if (_.isString(obj["sellerOrderPreparation"])) {
                this["sellerOrderPreparation"] = obj["sellerOrderPreparation"];
            }
            else if (obj["sellerOrderPreparation"]._id) {
                this["sellerOrderPreparation"] = obj["sellerOrderPreparation"]._id;
            }
            else if (obj["sellerOrderPreparation"]._bsontype && (obj["sellerOrderPreparation"]._bsontype === 'ObjectID')) {
                this["sellerOrderPreparation"] = obj["sellerOrderPreparation"];
            }
        }
        if (obj["qbpProductRequest"] != undefined) {
            if (_.isString(obj["qbpProductRequest"])) {
                this["qbpProductRequest"] = obj["qbpProductRequest"];
            }
            else if (obj["qbpProductRequest"]._id) {
                this["qbpProductRequest"] = obj["qbpProductRequest"]._id;
            }
            else if (obj["qbpProductRequest"]._bsontype && (obj["qbpProductRequest"]._bsontype === 'ObjectID')) {
                this["qbpProductRequest"] = obj["qbpProductRequest"];
            }
        }
        if (obj["confirmOrderCustomer"] != undefined) {
            if (_.isString(obj["confirmOrderCustomer"])) {
                this["confirmOrderCustomer"] = obj["confirmOrderCustomer"];
            }
            else if (obj["confirmOrderCustomer"]._id) {
                this["confirmOrderCustomer"] = obj["confirmOrderCustomer"]._id;
            }
            else if (obj["confirmOrderCustomer"]._bsontype && (obj["confirmOrderCustomer"]._bsontype === 'ObjectID')) {
                this["confirmOrderCustomer"] = obj["confirmOrderCustomer"];
            }
        }
        if (obj["notifyDpd"] != undefined) {
            this["notifyDpd"] = new Boolean(obj["notifyDpd"]).valueOf();
        }
        if (obj["sellerMessage"] != undefined) {
            if (_.isString(obj["sellerMessage"])) {
                this["sellerMessage"] = obj["sellerMessage"];
            }
            else if (obj["sellerMessage"]._id) {
                this["sellerMessage"] = obj["sellerMessage"]._id;
            }
            else if (obj["sellerMessage"]._bsontype && (obj["sellerMessage"]._bsontype === 'ObjectID')) {
                this["sellerMessage"] = obj["sellerMessage"];
            }
        }
        if (obj["customerContactMessage"] != undefined) {
            if (_.isString(obj["customerContactMessage"])) {
                this["customerContactMessage"] = obj["customerContactMessage"];
            }
            else if (obj["customerContactMessage"]._id) {
                this["customerContactMessage"] = obj["customerContactMessage"]._id;
            }
            else if (obj["customerContactMessage"]._bsontype && (obj["customerContactMessage"]._bsontype === 'ObjectID')) {
                this["customerContactMessage"] = obj["customerContactMessage"];
            }
        }
        if (obj["contactMessage"] != undefined) {
            if (_.isString(obj["contactMessage"])) {
                this["contactMessage"] = obj["contactMessage"];
            }
            else if (obj["contactMessage"]._id) {
                this["contactMessage"] = obj["contactMessage"]._id;
            }
            else if (obj["contactMessage"]._bsontype && (obj["contactMessage"]._bsontype === 'ObjectID')) {
                this["contactMessage"] = obj["contactMessage"];
            }
        }
        if (obj["customerInvoiceRequest"] != undefined) {
            if (_.isString(obj["customerInvoiceRequest"])) {
                this["customerInvoiceRequest"] = obj["customerInvoiceRequest"];
            }
            else if (obj["customerInvoiceRequest"]._id) {
                this["customerInvoiceRequest"] = obj["customerInvoiceRequest"]._id;
            }
            else if (obj["customerInvoiceRequest"]._bsontype && (obj["customerInvoiceRequest"]._bsontype === 'ObjectID')) {
                this["customerInvoiceRequest"] = obj["customerInvoiceRequest"];
            }
        }
        if (obj["afterSalesMessageCustomer"] != undefined) {
            if (_.isString(obj["afterSalesMessageCustomer"])) {
                this["afterSalesMessageCustomer"] = obj["afterSalesMessageCustomer"];
            }
            else if (obj["afterSalesMessageCustomer"]._id) {
                this["afterSalesMessageCustomer"] = obj["afterSalesMessageCustomer"]._id;
            }
            else if (obj["afterSalesMessageCustomer"]._bsontype && (obj["afterSalesMessageCustomer"]._bsontype === 'ObjectID')) {
                this["afterSalesMessageCustomer"] = obj["afterSalesMessageCustomer"];
            }
        }
        if (obj["afterSalesMessageSeller"] != undefined) {
            if (_.isString(obj["afterSalesMessageSeller"])) {
                this["afterSalesMessageSeller"] = obj["afterSalesMessageSeller"];
            }
            else if (obj["afterSalesMessageSeller"]._id) {
                this["afterSalesMessageSeller"] = obj["afterSalesMessageSeller"]._id;
            }
            else if (obj["afterSalesMessageSeller"]._bsontype && (obj["afterSalesMessageSeller"]._bsontype === 'ObjectID')) {
                this["afterSalesMessageSeller"] = obj["afterSalesMessageSeller"];
            }
        }
        if (obj["qbpRelaisRamassesDpd"] != undefined) {
            if (_.isString(obj["qbpRelaisRamassesDpd"])) {
                this["qbpRelaisRamassesDpd"] = obj["qbpRelaisRamassesDpd"];
            }
            else if (obj["qbpRelaisRamassesDpd"]._id) {
                this["qbpRelaisRamassesDpd"] = obj["qbpRelaisRamassesDpd"]._id;
            }
            else if (obj["qbpRelaisRamassesDpd"]._bsontype && (obj["qbpRelaisRamassesDpd"]._bsontype === 'ObjectID')) {
                this["qbpRelaisRamassesDpd"] = obj["qbpRelaisRamassesDpd"];
            }
        }
        if (obj["qbpAfterSalesClose"] != undefined) {
            if (_.isString(obj["qbpAfterSalesClose"])) {
                this["qbpAfterSalesClose"] = obj["qbpAfterSalesClose"];
            }
            else if (obj["qbpAfterSalesClose"]._id) {
                this["qbpAfterSalesClose"] = obj["qbpAfterSalesClose"]._id;
            }
            else if (obj["qbpAfterSalesClose"]._bsontype && (obj["qbpAfterSalesClose"]._bsontype === 'ObjectID')) {
                this["qbpAfterSalesClose"] = obj["qbpAfterSalesClose"];
            }
        }
        if (obj["qbpBankWireInformations"] != undefined) {
            if (_.isString(obj["qbpBankWireInformations"])) {
                this["qbpBankWireInformations"] = obj["qbpBankWireInformations"];
            }
            else if (obj["qbpBankWireInformations"]._id) {
                this["qbpBankWireInformations"] = obj["qbpBankWireInformations"]._id;
            }
            else if (obj["qbpBankWireInformations"]._bsontype && (obj["qbpBankWireInformations"]._bsontype === 'ObjectID')) {
                this["qbpBankWireInformations"] = obj["qbpBankWireInformations"];
            }
        }
        if (obj["bankWirePayinError"] != undefined) {
            if (_.isString(obj["bankWirePayinError"])) {
                this["bankWirePayinError"] = obj["bankWirePayinError"];
            }
            else if (obj["bankWirePayinError"]._id) {
                this["bankWirePayinError"] = obj["bankWirePayinError"]._id;
            }
            else if (obj["bankWirePayinError"]._bsontype && (obj["bankWirePayinError"]._bsontype === 'ObjectID')) {
                this["bankWirePayinError"] = obj["bankWirePayinError"];
            }
        }
        if (obj["retractationDeliveredToSeller"] != undefined) {
            if (_.isString(obj["retractationDeliveredToSeller"])) {
                this["retractationDeliveredToSeller"] = obj["retractationDeliveredToSeller"];
            }
            else if (obj["retractationDeliveredToSeller"]._id) {
                this["retractationDeliveredToSeller"] = obj["retractationDeliveredToSeller"]._id;
            }
            else if (obj["retractationDeliveredToSeller"]._bsontype && (obj["retractationDeliveredToSeller"]._bsontype === 'ObjectID')) {
                this["retractationDeliveredToSeller"] = obj["retractationDeliveredToSeller"];
            }
        }
        if (obj["savReturnDeliveredToSeller"] != undefined) {
            if (_.isString(obj["savReturnDeliveredToSeller"])) {
                this["savReturnDeliveredToSeller"] = obj["savReturnDeliveredToSeller"];
            }
            else if (obj["savReturnDeliveredToSeller"]._id) {
                this["savReturnDeliveredToSeller"] = obj["savReturnDeliveredToSeller"]._id;
            }
            else if (obj["savReturnDeliveredToSeller"]._bsontype && (obj["savReturnDeliveredToSeller"]._bsontype === 'ObjectID')) {
                this["savReturnDeliveredToSeller"] = obj["savReturnDeliveredToSeller"];
            }
        }
        if (obj["fourteenDaysBackConfirmation"] != undefined) {
            if (_.isString(obj["fourteenDaysBackConfirmation"])) {
                this["fourteenDaysBackConfirmation"] = obj["fourteenDaysBackConfirmation"];
            }
            else if (obj["fourteenDaysBackConfirmation"]._id) {
                this["fourteenDaysBackConfirmation"] = obj["fourteenDaysBackConfirmation"]._id;
            }
            else if (obj["fourteenDaysBackConfirmation"]._bsontype && (obj["fourteenDaysBackConfirmation"]._bsontype === 'ObjectID')) {
                this["fourteenDaysBackConfirmation"] = obj["fourteenDaysBackConfirmation"];
            }
        }
    }
}
exports.Model_QbpMailer = Model_QbpMailer;
