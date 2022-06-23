import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  configuration pour l'envoie d emails QBP
*/
export class Model_QbpMailer extends  Base  implements Interface.IQbpMailer {

/**
  configuration pour l'envoie d emails QBP
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["qbpEmailContact"] != undefined){
          
           this["qbpEmailContact"] = obj["qbpEmailContact"].toString() ;
           
        }
        
    
        
        if(obj["senderEmail"] != undefined){
          
           this["senderEmail"] = obj["senderEmail"].toString() ;
           
        }
        
    
        
        if(obj["senderName"] != undefined){
          
           this["senderName"] = obj["senderName"].toString() ;
           
        }
        
    
        
        if(obj["qbpBaseUrl"] != undefined){
          
           this["qbpBaseUrl"] = obj["qbpBaseUrl"].toString() ;
           
        }
        
    
        
        if(obj["qbpSendgridApiUrl"] != undefined){
          
           this["qbpSendgridApiUrl"] = obj["qbpSendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["orderCanceled"] != undefined){
          
          if(_.isString(obj["orderCanceled"])){
            this["orderCanceled"] = obj["orderCanceled"];
          }else if(obj["orderCanceled"]._id){
            this["orderCanceled"] = obj["orderCanceled"]._id ;
          }else if((obj["orderCanceled"]._bsontype && (obj["orderCanceled"]._bsontype === 'ObjectID'){
              this["orderCanceled"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["orderDeliveryDelais"] != undefined){
          
          if(_.isString(obj["orderDeliveryDelais"])){
            this["orderDeliveryDelais"] = obj["orderDeliveryDelais"];
          }else if(obj["orderDeliveryDelais"]._id){
            this["orderDeliveryDelais"] = obj["orderDeliveryDelais"]._id ;
          }else if((obj["orderDeliveryDelais"]._bsontype && (obj["orderDeliveryDelais"]._bsontype === 'ObjectID'){
              this["orderDeliveryDelais"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesRequest"] != undefined){
          
          if(_.isString(obj["afterSalesRequest"])){
            this["afterSalesRequest"] = obj["afterSalesRequest"];
          }else if(obj["afterSalesRequest"]._id){
            this["afterSalesRequest"] = obj["afterSalesRequest"]._id ;
          }else if((obj["afterSalesRequest"]._bsontype && (obj["afterSalesRequest"]._bsontype === 'ObjectID'){
              this["afterSalesRequest"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["fourteenDaysBackPickingConfirmed"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackPickingConfirmed"])){
            this["fourteenDaysBackPickingConfirmed"] = obj["fourteenDaysBackPickingConfirmed"];
          }else if(obj["fourteenDaysBackPickingConfirmed"]._id){
            this["fourteenDaysBackPickingConfirmed"] = obj["fourteenDaysBackPickingConfirmed"]._id ;
          }else if((obj["fourteenDaysBackPickingConfirmed"]._bsontype && (obj["fourteenDaysBackPickingConfirmed"]._bsontype === 'ObjectID'){
              this["fourteenDaysBackPickingConfirmed"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["fourteenDaysBackRefundAccepted"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRefundAccepted"])){
            this["fourteenDaysBackRefundAccepted"] = obj["fourteenDaysBackRefundAccepted"];
          }else if(obj["fourteenDaysBackRefundAccepted"]._id){
            this["fourteenDaysBackRefundAccepted"] = obj["fourteenDaysBackRefundAccepted"]._id ;
          }else if((obj["fourteenDaysBackRefundAccepted"]._bsontype && (obj["fourteenDaysBackRefundAccepted"]._bsontype === 'ObjectID'){
              this["fourteenDaysBackRefundAccepted"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["fourteenDaysBackShippingLabel"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackShippingLabel"])){
            this["fourteenDaysBackShippingLabel"] = obj["fourteenDaysBackShippingLabel"];
          }else if(obj["fourteenDaysBackShippingLabel"]._id){
            this["fourteenDaysBackShippingLabel"] = obj["fourteenDaysBackShippingLabel"]._id ;
          }else if((obj["fourteenDaysBackShippingLabel"]._bsontype && (obj["fourteenDaysBackShippingLabel"]._bsontype === 'ObjectID'){
              this["fourteenDaysBackShippingLabel"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["fourteenDaysBackRequest"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRequest"])){
            this["fourteenDaysBackRequest"] = obj["fourteenDaysBackRequest"];
          }else if(obj["fourteenDaysBackRequest"]._id){
            this["fourteenDaysBackRequest"] = obj["fourteenDaysBackRequest"]._id ;
          }else if((obj["fourteenDaysBackRequest"]._bsontype && (obj["fourteenDaysBackRequest"]._bsontype === 'ObjectID'){
              this["fourteenDaysBackRequest"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["fourteenDaysBackRefusal"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRefusal"])){
            this["fourteenDaysBackRefusal"] = obj["fourteenDaysBackRefusal"];
          }else if(obj["fourteenDaysBackRefusal"]._id){
            this["fourteenDaysBackRefusal"] = obj["fourteenDaysBackRefusal"]._id ;
          }else if((obj["fourteenDaysBackRefusal"]._bsontype && (obj["fourteenDaysBackRefusal"]._bsontype === 'ObjectID'){
              this["fourteenDaysBackRefusal"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["fourteenDaysBackRefund"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRefund"])){
            this["fourteenDaysBackRefund"] = obj["fourteenDaysBackRefund"];
          }else if(obj["fourteenDaysBackRefund"]._id){
            this["fourteenDaysBackRefund"] = obj["fourteenDaysBackRefund"]._id ;
          }else if((obj["fourteenDaysBackRefund"]._bsontype && (obj["fourteenDaysBackRefund"]._bsontype === 'ObjectID'){
              this["fourteenDaysBackRefund"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesAccepted"] != undefined){
          
          if(_.isString(obj["afterSalesAccepted"])){
            this["afterSalesAccepted"] = obj["afterSalesAccepted"];
          }else if(obj["afterSalesAccepted"]._id){
            this["afterSalesAccepted"] = obj["afterSalesAccepted"]._id ;
          }else if((obj["afterSalesAccepted"]._bsontype && (obj["afterSalesAccepted"]._bsontype === 'ObjectID'){
              this["afterSalesAccepted"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesShippingLabel"] != undefined){
          
          if(_.isString(obj["afterSalesShippingLabel"])){
            this["afterSalesShippingLabel"] = obj["afterSalesShippingLabel"];
          }else if(obj["afterSalesShippingLabel"]._id){
            this["afterSalesShippingLabel"] = obj["afterSalesShippingLabel"]._id ;
          }else if((obj["afterSalesShippingLabel"]._bsontype && (obj["afterSalesShippingLabel"]._bsontype === 'ObjectID'){
              this["afterSalesShippingLabel"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesPickingConfirmed"] != undefined){
          
          if(_.isString(obj["afterSalesPickingConfirmed"])){
            this["afterSalesPickingConfirmed"] = obj["afterSalesPickingConfirmed"];
          }else if(obj["afterSalesPickingConfirmed"]._id){
            this["afterSalesPickingConfirmed"] = obj["afterSalesPickingConfirmed"]._id ;
          }else if((obj["afterSalesPickingConfirmed"]._bsontype && (obj["afterSalesPickingConfirmed"]._bsontype === 'ObjectID'){
              this["afterSalesPickingConfirmed"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesDelivered"] != undefined){
          
          if(_.isString(obj["afterSalesDelivered"])){
            this["afterSalesDelivered"] = obj["afterSalesDelivered"];
          }else if(obj["afterSalesDelivered"]._id){
            this["afterSalesDelivered"] = obj["afterSalesDelivered"]._id ;
          }else if((obj["afterSalesDelivered"]._bsontype && (obj["afterSalesDelivered"]._bsontype === 'ObjectID'){
              this["afterSalesDelivered"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesRefusal"] != undefined){
          
          if(_.isString(obj["afterSalesRefusal"])){
            this["afterSalesRefusal"] = obj["afterSalesRefusal"];
          }else if(obj["afterSalesRefusal"]._id){
            this["afterSalesRefusal"] = obj["afterSalesRefusal"]._id ;
          }else if((obj["afterSalesRefusal"]._bsontype && (obj["afterSalesRefusal"]._bsontype === 'ObjectID'){
              this["afterSalesRefusal"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesVendorRefusal"] != undefined){
          
          if(_.isString(obj["afterSalesVendorRefusal"])){
            this["afterSalesVendorRefusal"] = obj["afterSalesVendorRefusal"];
          }else if(obj["afterSalesVendorRefusal"]._id){
            this["afterSalesVendorRefusal"] = obj["afterSalesVendorRefusal"]._id ;
          }else if((obj["afterSalesVendorRefusal"]._bsontype && (obj["afterSalesVendorRefusal"]._bsontype === 'ObjectID'){
              this["afterSalesVendorRefusal"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["orderPreparation"] != undefined){
          
          if(_.isString(obj["orderPreparation"])){
            this["orderPreparation"] = obj["orderPreparation"];
          }else if(obj["orderPreparation"]._id){
            this["orderPreparation"] = obj["orderPreparation"]._id ;
          }else if((obj["orderPreparation"]._bsontype && (obj["orderPreparation"]._bsontype === 'ObjectID'){
              this["orderPreparation"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["orderDelivered"] != undefined){
          
          if(_.isString(obj["orderDelivered"])){
            this["orderDelivered"] = obj["orderDelivered"];
          }else if(obj["orderDelivered"]._id){
            this["orderDelivered"] = obj["orderDelivered"]._id ;
          }else if((obj["orderDelivered"]._bsontype && (obj["orderDelivered"]._bsontype === 'ObjectID'){
              this["orderDelivered"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["errorPasswordCustomer"] != undefined){
          
          if(_.isString(obj["errorPasswordCustomer"])){
            this["errorPasswordCustomer"] = obj["errorPasswordCustomer"];
          }else if(obj["errorPasswordCustomer"]._id){
            this["errorPasswordCustomer"] = obj["errorPasswordCustomer"]._id ;
          }else if((obj["errorPasswordCustomer"]._bsontype && (obj["errorPasswordCustomer"]._bsontype === 'ObjectID'){
              this["errorPasswordCustomer"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["refund"] != undefined){
          
          if(_.isString(obj["refund"])){
            this["refund"] = obj["refund"];
          }else if(obj["refund"]._id){
            this["refund"] = obj["refund"]._id ;
          }else if((obj["refund"]._bsontype && (obj["refund"]._bsontype === 'ObjectID'){
              this["refund"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["infoShipmentCustomer"] != undefined){
          
          if(_.isString(obj["infoShipmentCustomer"])){
            this["infoShipmentCustomer"] = obj["infoShipmentCustomer"];
          }else if(obj["infoShipmentCustomer"]._id){
            this["infoShipmentCustomer"] = obj["infoShipmentCustomer"]._id ;
          }else if((obj["infoShipmentCustomer"]._bsontype && (obj["infoShipmentCustomer"]._bsontype === 'ObjectID'){
              this["infoShipmentCustomer"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["creationAccountCustomer"] != undefined){
          
          if(_.isString(obj["creationAccountCustomer"])){
            this["creationAccountCustomer"] = obj["creationAccountCustomer"];
          }else if(obj["creationAccountCustomer"]._id){
            this["creationAccountCustomer"] = obj["creationAccountCustomer"]._id ;
          }else if((obj["creationAccountCustomer"]._bsontype && (obj["creationAccountCustomer"]._bsontype === 'ObjectID'){
              this["creationAccountCustomer"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["orderShipped"] != undefined){
          
          if(_.isString(obj["orderShipped"])){
            this["orderShipped"] = obj["orderShipped"];
          }else if(obj["orderShipped"]._id){
            this["orderShipped"] = obj["orderShipped"]._id ;
          }else if((obj["orderShipped"]._bsontype && (obj["orderShipped"]._bsontype === 'ObjectID'){
              this["orderShipped"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["customerReview"] != undefined){
          
          if(_.isString(obj["customerReview"])){
            this["customerReview"] = obj["customerReview"];
          }else if(obj["customerReview"]._id){
            this["customerReview"] = obj["customerReview"]._id ;
          }else if((obj["customerReview"]._bsontype && (obj["customerReview"]._bsontype === 'ObjectID'){
              this["customerReview"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["sellerCustomerRequest"] != undefined){
          
          if(_.isString(obj["sellerCustomerRequest"])){
            this["sellerCustomerRequest"] = obj["sellerCustomerRequest"];
          }else if(obj["sellerCustomerRequest"]._id){
            this["sellerCustomerRequest"] = obj["sellerCustomerRequest"]._id ;
          }else if((obj["sellerCustomerRequest"]._bsontype && (obj["sellerCustomerRequest"]._bsontype === 'ObjectID'){
              this["sellerCustomerRequest"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["qbpRamassesDpd"] != undefined){
          
          if(_.isString(obj["qbpRamassesDpd"])){
            this["qbpRamassesDpd"] = obj["qbpRamassesDpd"];
          }else if(obj["qbpRamassesDpd"]._id){
            this["qbpRamassesDpd"] = obj["qbpRamassesDpd"]._id ;
          }else if((obj["qbpRamassesDpd"]._bsontype && (obj["qbpRamassesDpd"]._bsontype === 'ObjectID'){
              this["qbpRamassesDpd"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["sellerOrderPreparation"] != undefined){
          
          if(_.isString(obj["sellerOrderPreparation"])){
            this["sellerOrderPreparation"] = obj["sellerOrderPreparation"];
          }else if(obj["sellerOrderPreparation"]._id){
            this["sellerOrderPreparation"] = obj["sellerOrderPreparation"]._id ;
          }else if((obj["sellerOrderPreparation"]._bsontype && (obj["sellerOrderPreparation"]._bsontype === 'ObjectID'){
              this["sellerOrderPreparation"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["qbpProductRequest"] != undefined){
          
          if(_.isString(obj["qbpProductRequest"])){
            this["qbpProductRequest"] = obj["qbpProductRequest"];
          }else if(obj["qbpProductRequest"]._id){
            this["qbpProductRequest"] = obj["qbpProductRequest"]._id ;
          }else if((obj["qbpProductRequest"]._bsontype && (obj["qbpProductRequest"]._bsontype === 'ObjectID'){
              this["qbpProductRequest"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["confirmOrderCustomer"] != undefined){
          
          if(_.isString(obj["confirmOrderCustomer"])){
            this["confirmOrderCustomer"] = obj["confirmOrderCustomer"];
          }else if(obj["confirmOrderCustomer"]._id){
            this["confirmOrderCustomer"] = obj["confirmOrderCustomer"]._id ;
          }else if((obj["confirmOrderCustomer"]._bsontype && (obj["confirmOrderCustomer"]._bsontype === 'ObjectID'){
              this["confirmOrderCustomer"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["notifyDpd"] != undefined){
          
           this["notifyDpd"] = new Boolean(obj["notifyDpd"]).valueOf() ;
          
        }
        
    
        
        if(obj["sellerMessage"] != undefined){
          
          if(_.isString(obj["sellerMessage"])){
            this["sellerMessage"] = obj["sellerMessage"];
          }else if(obj["sellerMessage"]._id){
            this["sellerMessage"] = obj["sellerMessage"]._id ;
          }else if((obj["sellerMessage"]._bsontype && (obj["sellerMessage"]._bsontype === 'ObjectID'){
              this["sellerMessage"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["customerContactMessage"] != undefined){
          
          if(_.isString(obj["customerContactMessage"])){
            this["customerContactMessage"] = obj["customerContactMessage"];
          }else if(obj["customerContactMessage"]._id){
            this["customerContactMessage"] = obj["customerContactMessage"]._id ;
          }else if((obj["customerContactMessage"]._bsontype && (obj["customerContactMessage"]._bsontype === 'ObjectID'){
              this["customerContactMessage"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["contactMessage"] != undefined){
          
          if(_.isString(obj["contactMessage"])){
            this["contactMessage"] = obj["contactMessage"];
          }else if(obj["contactMessage"]._id){
            this["contactMessage"] = obj["contactMessage"]._id ;
          }else if((obj["contactMessage"]._bsontype && (obj["contactMessage"]._bsontype === 'ObjectID'){
              this["contactMessage"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["customerInvoiceRequest"] != undefined){
          
          if(_.isString(obj["customerInvoiceRequest"])){
            this["customerInvoiceRequest"] = obj["customerInvoiceRequest"];
          }else if(obj["customerInvoiceRequest"]._id){
            this["customerInvoiceRequest"] = obj["customerInvoiceRequest"]._id ;
          }else if((obj["customerInvoiceRequest"]._bsontype && (obj["customerInvoiceRequest"]._bsontype === 'ObjectID'){
              this["customerInvoiceRequest"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesMessageCustomer"] != undefined){
          
          if(_.isString(obj["afterSalesMessageCustomer"])){
            this["afterSalesMessageCustomer"] = obj["afterSalesMessageCustomer"];
          }else if(obj["afterSalesMessageCustomer"]._id){
            this["afterSalesMessageCustomer"] = obj["afterSalesMessageCustomer"]._id ;
          }else if((obj["afterSalesMessageCustomer"]._bsontype && (obj["afterSalesMessageCustomer"]._bsontype === 'ObjectID'){
              this["afterSalesMessageCustomer"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["afterSalesMessageSeller"] != undefined){
          
          if(_.isString(obj["afterSalesMessageSeller"])){
            this["afterSalesMessageSeller"] = obj["afterSalesMessageSeller"];
          }else if(obj["afterSalesMessageSeller"]._id){
            this["afterSalesMessageSeller"] = obj["afterSalesMessageSeller"]._id ;
          }else if((obj["afterSalesMessageSeller"]._bsontype && (obj["afterSalesMessageSeller"]._bsontype === 'ObjectID'){
              this["afterSalesMessageSeller"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["qbpRelaisRamassesDpd"] != undefined){
          
          if(_.isString(obj["qbpRelaisRamassesDpd"])){
            this["qbpRelaisRamassesDpd"] = obj["qbpRelaisRamassesDpd"];
          }else if(obj["qbpRelaisRamassesDpd"]._id){
            this["qbpRelaisRamassesDpd"] = obj["qbpRelaisRamassesDpd"]._id ;
          }else if((obj["qbpRelaisRamassesDpd"]._bsontype && (obj["qbpRelaisRamassesDpd"]._bsontype === 'ObjectID'){
              this["qbpRelaisRamassesDpd"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["qbpAfterSalesClose"] != undefined){
          
          if(_.isString(obj["qbpAfterSalesClose"])){
            this["qbpAfterSalesClose"] = obj["qbpAfterSalesClose"];
          }else if(obj["qbpAfterSalesClose"]._id){
            this["qbpAfterSalesClose"] = obj["qbpAfterSalesClose"]._id ;
          }else if((obj["qbpAfterSalesClose"]._bsontype && (obj["qbpAfterSalesClose"]._bsontype === 'ObjectID'){
              this["qbpAfterSalesClose"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["qbpBankWireInformations"] != undefined){
          
          if(_.isString(obj["qbpBankWireInformations"])){
            this["qbpBankWireInformations"] = obj["qbpBankWireInformations"];
          }else if(obj["qbpBankWireInformations"]._id){
            this["qbpBankWireInformations"] = obj["qbpBankWireInformations"]._id ;
          }else if((obj["qbpBankWireInformations"]._bsontype && (obj["qbpBankWireInformations"]._bsontype === 'ObjectID'){
              this["qbpBankWireInformations"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["bankWirePayinError"] != undefined){
          
          if(_.isString(obj["bankWirePayinError"])){
            this["bankWirePayinError"] = obj["bankWirePayinError"];
          }else if(obj["bankWirePayinError"]._id){
            this["bankWirePayinError"] = obj["bankWirePayinError"]._id ;
          }else if((obj["bankWirePayinError"]._bsontype && (obj["bankWirePayinError"]._bsontype === 'ObjectID'){
              this["bankWirePayinError"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["retractationDeliveredToSeller"] != undefined){
          
          if(_.isString(obj["retractationDeliveredToSeller"])){
            this["retractationDeliveredToSeller"] = obj["retractationDeliveredToSeller"];
          }else if(obj["retractationDeliveredToSeller"]._id){
            this["retractationDeliveredToSeller"] = obj["retractationDeliveredToSeller"]._id ;
          }else if((obj["retractationDeliveredToSeller"]._bsontype && (obj["retractationDeliveredToSeller"]._bsontype === 'ObjectID'){
              this["retractationDeliveredToSeller"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["savReturnDeliveredToSeller"] != undefined){
          
          if(_.isString(obj["savReturnDeliveredToSeller"])){
            this["savReturnDeliveredToSeller"] = obj["savReturnDeliveredToSeller"];
          }else if(obj["savReturnDeliveredToSeller"]._id){
            this["savReturnDeliveredToSeller"] = obj["savReturnDeliveredToSeller"]._id ;
          }else if((obj["savReturnDeliveredToSeller"]._bsontype && (obj["savReturnDeliveredToSeller"]._bsontype === 'ObjectID'){
              this["savReturnDeliveredToSeller"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["fourteenDaysBackConfirmation"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackConfirmation"])){
            this["fourteenDaysBackConfirmation"] = obj["fourteenDaysBackConfirmation"];
          }else if(obj["fourteenDaysBackConfirmation"]._id){
            this["fourteenDaysBackConfirmation"] = obj["fourteenDaysBackConfirmation"]._id ;
          }else if((obj["fourteenDaysBackConfirmation"]._bsontype && (obj["fourteenDaysBackConfirmation"]._bsontype === 'ObjectID'){
              this["fourteenDaysBackConfirmation"] = `${value}` ;
            }
          
        }
        
    
  }
  

    public _class:string  = "QbpMailer" ;

        
              /**
        Email de qbp
        */
               public "qbpEmailContact"?:string ;
              
       
              /**
        Adresse mail affiché lorsque l'utilisateur reçois un mail
        */
               public "senderEmail"?:string ;
              
       
              /**
        Nom affiche dans les en-tete du mail
        */
               public "senderName"?:string ;
              
       
              /**
        Adresse du site , exemple qbp.justplug.info en dev ou quelbonplan.fr en prod
        */
               public "qbpBaseUrl"?:string ;
              
       
              /**
        Url de l'api sendgrid pour quelbonplan
        */
               public "qbpSendgridApiUrl"?:string ;
              
       
              /**
        Commande annulé
        */
               public "orderCanceled"?:string ;
              
       
              /**
        Délais de livraison pour la commande
        */
               public "orderDeliveryDelais"?:string ;
              
       
              /**
        Demande de retour SAV
        */
               public "afterSalesRequest"?:string ;
              
       
              /**
        Enlèvement colis pour retour 14 jours a bien été pris en charge par le transporteur
        */
               public "fourteenDaysBackPickingConfirmed"?:string ;
              
       
              /**
        Demande de rétractation 14 jours a été acceptée
        */
               public "fourteenDaysBackRefundAccepted"?:string ;
              
       
              /**
        Bon de transport pour effectuer retour 14 jours
        */
               public "fourteenDaysBackShippingLabel"?:string ;
              
       
              /**
        Demande de retour sous 14 jours
        */
               public "fourteenDaysBackRequest"?:string ;
              
       
              /**
        Retractations 14 jours refusé
        */
               public "fourteenDaysBackRefusal"?:string ;
              
       
              /**
        Demande de rétractation 14 jours remboursé
        */
               public "fourteenDaysBackRefund"?:string ;
              
       
              /**
        Demande de retour SAV a été acceptée
        */
               public "afterSalesAccepted"?:string ;
              
       
              /**
        Bon de transport pour effectuer votre retour SAV
        */
               public "afterSalesShippingLabel"?:string ;
              
       
              /**
        Colis pour votre retour SAV
        */
               public "afterSalesPickingConfirmed"?:string ;
              
       
              /**
        Colis a bien été réceptionné par le vendeur.
        */
               public "afterSalesDelivered"?:string ;
              
       
              /**
        Demande de retour SAV a été refusée
        */
               public "afterSalesRefusal"?:string ;
              
       
              /**
        Retour SAV a été refusée par par le vendeur
        */
               public "afterSalesVendorRefusal"?:string ;
              
       
              /**
        Préparation de la commande
        */
               public "orderPreparation"?:string ;
              
       
              /**
        Commande délivré
        */
               public "orderDelivered"?:string ;
              
       
              /**
        Réiniatialiser mot de passe
        */
               public "errorPasswordCustomer"?:string ;
              
       
              /**
        Commande rembourser
        */
               public "refund"?:string ;
              
       
              /**
        Message informatif
        */
               public "infoShipmentCustomer"?:string ;
              
       
              /**
        Creation de compte client
        */
               public "creationAccountCustomer"?:string ;
              
       
              /**
        Commande pris en charge par le transporteur
        */
               public "orderShipped"?:string ;
              
       
              /**
        Avis client
        */
               public "customerReview"?:string ;
              
       
              /**
        Vous avez reçu un message du client
        */
               public "sellerCustomerRequest"?:string ;
              
       
              /**
        Mail pour prévenir DPD d'un ramassage a effectuer en point relais
        */
               public "qbpRamassesDpd"?:string ;
              
       
              /**
        Prevenir le vendeur que une commande a été passer
        */
               public "sellerOrderPreparation"?:string ;
              
       
              /**
        Demande d'ajout d'un nouveau model de la part d'un vendeur
        */
               public "qbpProductRequest"?:string ;
              
       
              /**
        Confirmation de commande
        */
               public "confirmOrderCustomer"?:string ;
              
       
              /**
        Notifié DPD pour un enlévement
        */
               public "notifyDpd"?:boolean =false;
              
       
              /**
        Previens le client quand vendeur lui a répondu
        */
               public "sellerMessage"?:string ;
              
       
              /**
        Message comme quoi nous avons bien recus ça demande
        */
               public "customerContactMessage"?:string ;
              
       
              /**
        Message de prise de contact a destination de quelbonplan
        */
               public "contactMessage"?:string ;
              
       
              /**
        Demande de facture de la part d'un client pour une commande donné
        */
               public "customerInvoiceRequest"?:string ;
              
       
              /**
        Message a destination d'un client pour le sav
        */
               public "afterSalesMessageCustomer"?:string ;
              
       
              /**
        Message a destination d'un seller pour le sav
        */
               public "afterSalesMessageSeller"?:string ;
              
       
              /**
        mail de ramassage en point relais
        */
               public "qbpRelaisRamassesDpd"?:string ;
              
       
              /**
        Mail de fermeture de ticket
        */
               public "qbpAfterSalesClose"?:string ;
              
       
              /**
        le mail qu'on envoie au client pour quil puisse realiser un virement bancaire pour payer sa commande
        */
               public "qbpBankWireInformations"?:string ;
              
       
              /**
        template de mail pour informer le SAV qu'il y a un probleme avec un payin par virement bancaire
        */
               public "bankWirePayinError"?:string ;
              
       
              /**
        Colis en retractation delivrer en vendeur
        */
               public "retractationDeliveredToSeller"?:string ;
              
       
              /**
        Colis retour sav livre au vendeur
        */
               public "savReturnDeliveredToSeller"?:string ;
              
       
              /**
        Confirmation de livraison chez le vendeur
        */
               public "fourteenDaysBackConfirmation"?:string ;
              
       


       

   }
