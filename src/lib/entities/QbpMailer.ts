import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  configuration pour l'envoie d emails QBP
*/
export class Entity_QbpMailer extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'QbpMailer' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["qbpEmailContact"] != undefined){
          
           obj["qbpEmailContact"] = obj["qbpEmailContact"].toString() ;
           
        }
        
    
        
        if(obj["senderEmail"] != undefined){
          
           obj["senderEmail"] = obj["senderEmail"].toString() ;
           
        }
        
    
        
        if(obj["senderName"] != undefined){
          
           obj["senderName"] = obj["senderName"].toString() ;
           
        }
        
    
        
        if(obj["qbpBaseUrl"] != undefined){
          
           obj["qbpBaseUrl"] = obj["qbpBaseUrl"].toString() ;
           
        }
        
    
        
        if(obj["qbpSendgridApiUrl"] != undefined){
          
           obj["qbpSendgridApiUrl"] = obj["qbpSendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["orderCanceled"] != undefined){
          
          if(_.isString(obj["orderCanceled"])){
            obj["orderCanceled"] = new mongo.ObjectId(obj["orderCanceled"]);
          }else if(obj["orderCanceled"]._id){
            obj["orderCanceled"] = new mongo.ObjectId(obj["orderCanceled"]._id) ;
          }
          
        }
        
    
        
        if(obj["orderDeliveryDelais"] != undefined){
          
          if(_.isString(obj["orderDeliveryDelais"])){
            obj["orderDeliveryDelais"] = new mongo.ObjectId(obj["orderDeliveryDelais"]);
          }else if(obj["orderDeliveryDelais"]._id){
            obj["orderDeliveryDelais"] = new mongo.ObjectId(obj["orderDeliveryDelais"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesRequest"] != undefined){
          
          if(_.isString(obj["afterSalesRequest"])){
            obj["afterSalesRequest"] = new mongo.ObjectId(obj["afterSalesRequest"]);
          }else if(obj["afterSalesRequest"]._id){
            obj["afterSalesRequest"] = new mongo.ObjectId(obj["afterSalesRequest"]._id) ;
          }
          
        }
        
    
        
        if(obj["fourteenDaysBackPickingConfirmed"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackPickingConfirmed"])){
            obj["fourteenDaysBackPickingConfirmed"] = new mongo.ObjectId(obj["fourteenDaysBackPickingConfirmed"]);
          }else if(obj["fourteenDaysBackPickingConfirmed"]._id){
            obj["fourteenDaysBackPickingConfirmed"] = new mongo.ObjectId(obj["fourteenDaysBackPickingConfirmed"]._id) ;
          }
          
        }
        
    
        
        if(obj["fourteenDaysBackRefundAccepted"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRefundAccepted"])){
            obj["fourteenDaysBackRefundAccepted"] = new mongo.ObjectId(obj["fourteenDaysBackRefundAccepted"]);
          }else if(obj["fourteenDaysBackRefundAccepted"]._id){
            obj["fourteenDaysBackRefundAccepted"] = new mongo.ObjectId(obj["fourteenDaysBackRefundAccepted"]._id) ;
          }
          
        }
        
    
        
        if(obj["fourteenDaysBackShippingLabel"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackShippingLabel"])){
            obj["fourteenDaysBackShippingLabel"] = new mongo.ObjectId(obj["fourteenDaysBackShippingLabel"]);
          }else if(obj["fourteenDaysBackShippingLabel"]._id){
            obj["fourteenDaysBackShippingLabel"] = new mongo.ObjectId(obj["fourteenDaysBackShippingLabel"]._id) ;
          }
          
        }
        
    
        
        if(obj["fourteenDaysBackRequest"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRequest"])){
            obj["fourteenDaysBackRequest"] = new mongo.ObjectId(obj["fourteenDaysBackRequest"]);
          }else if(obj["fourteenDaysBackRequest"]._id){
            obj["fourteenDaysBackRequest"] = new mongo.ObjectId(obj["fourteenDaysBackRequest"]._id) ;
          }
          
        }
        
    
        
        if(obj["fourteenDaysBackRefusal"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRefusal"])){
            obj["fourteenDaysBackRefusal"] = new mongo.ObjectId(obj["fourteenDaysBackRefusal"]);
          }else if(obj["fourteenDaysBackRefusal"]._id){
            obj["fourteenDaysBackRefusal"] = new mongo.ObjectId(obj["fourteenDaysBackRefusal"]._id) ;
          }
          
        }
        
    
        
        if(obj["fourteenDaysBackRefund"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackRefund"])){
            obj["fourteenDaysBackRefund"] = new mongo.ObjectId(obj["fourteenDaysBackRefund"]);
          }else if(obj["fourteenDaysBackRefund"]._id){
            obj["fourteenDaysBackRefund"] = new mongo.ObjectId(obj["fourteenDaysBackRefund"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesAccepted"] != undefined){
          
          if(_.isString(obj["afterSalesAccepted"])){
            obj["afterSalesAccepted"] = new mongo.ObjectId(obj["afterSalesAccepted"]);
          }else if(obj["afterSalesAccepted"]._id){
            obj["afterSalesAccepted"] = new mongo.ObjectId(obj["afterSalesAccepted"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesShippingLabel"] != undefined){
          
          if(_.isString(obj["afterSalesShippingLabel"])){
            obj["afterSalesShippingLabel"] = new mongo.ObjectId(obj["afterSalesShippingLabel"]);
          }else if(obj["afterSalesShippingLabel"]._id){
            obj["afterSalesShippingLabel"] = new mongo.ObjectId(obj["afterSalesShippingLabel"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesPickingConfirmed"] != undefined){
          
          if(_.isString(obj["afterSalesPickingConfirmed"])){
            obj["afterSalesPickingConfirmed"] = new mongo.ObjectId(obj["afterSalesPickingConfirmed"]);
          }else if(obj["afterSalesPickingConfirmed"]._id){
            obj["afterSalesPickingConfirmed"] = new mongo.ObjectId(obj["afterSalesPickingConfirmed"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesDelivered"] != undefined){
          
          if(_.isString(obj["afterSalesDelivered"])){
            obj["afterSalesDelivered"] = new mongo.ObjectId(obj["afterSalesDelivered"]);
          }else if(obj["afterSalesDelivered"]._id){
            obj["afterSalesDelivered"] = new mongo.ObjectId(obj["afterSalesDelivered"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesRefusal"] != undefined){
          
          if(_.isString(obj["afterSalesRefusal"])){
            obj["afterSalesRefusal"] = new mongo.ObjectId(obj["afterSalesRefusal"]);
          }else if(obj["afterSalesRefusal"]._id){
            obj["afterSalesRefusal"] = new mongo.ObjectId(obj["afterSalesRefusal"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesVendorRefusal"] != undefined){
          
          if(_.isString(obj["afterSalesVendorRefusal"])){
            obj["afterSalesVendorRefusal"] = new mongo.ObjectId(obj["afterSalesVendorRefusal"]);
          }else if(obj["afterSalesVendorRefusal"]._id){
            obj["afterSalesVendorRefusal"] = new mongo.ObjectId(obj["afterSalesVendorRefusal"]._id) ;
          }
          
        }
        
    
        
        if(obj["orderPreparation"] != undefined){
          
          if(_.isString(obj["orderPreparation"])){
            obj["orderPreparation"] = new mongo.ObjectId(obj["orderPreparation"]);
          }else if(obj["orderPreparation"]._id){
            obj["orderPreparation"] = new mongo.ObjectId(obj["orderPreparation"]._id) ;
          }
          
        }
        
    
        
        if(obj["orderDelivered"] != undefined){
          
          if(_.isString(obj["orderDelivered"])){
            obj["orderDelivered"] = new mongo.ObjectId(obj["orderDelivered"]);
          }else if(obj["orderDelivered"]._id){
            obj["orderDelivered"] = new mongo.ObjectId(obj["orderDelivered"]._id) ;
          }
          
        }
        
    
        
        if(obj["errorPasswordCustomer"] != undefined){
          
          if(_.isString(obj["errorPasswordCustomer"])){
            obj["errorPasswordCustomer"] = new mongo.ObjectId(obj["errorPasswordCustomer"]);
          }else if(obj["errorPasswordCustomer"]._id){
            obj["errorPasswordCustomer"] = new mongo.ObjectId(obj["errorPasswordCustomer"]._id) ;
          }
          
        }
        
    
        
        if(obj["refund"] != undefined){
          
          if(_.isString(obj["refund"])){
            obj["refund"] = new mongo.ObjectId(obj["refund"]);
          }else if(obj["refund"]._id){
            obj["refund"] = new mongo.ObjectId(obj["refund"]._id) ;
          }
          
        }
        
    
        
        if(obj["infoShipmentCustomer"] != undefined){
          
          if(_.isString(obj["infoShipmentCustomer"])){
            obj["infoShipmentCustomer"] = new mongo.ObjectId(obj["infoShipmentCustomer"]);
          }else if(obj["infoShipmentCustomer"]._id){
            obj["infoShipmentCustomer"] = new mongo.ObjectId(obj["infoShipmentCustomer"]._id) ;
          }
          
        }
        
    
        
        if(obj["creationAccountCustomer"] != undefined){
          
          if(_.isString(obj["creationAccountCustomer"])){
            obj["creationAccountCustomer"] = new mongo.ObjectId(obj["creationAccountCustomer"]);
          }else if(obj["creationAccountCustomer"]._id){
            obj["creationAccountCustomer"] = new mongo.ObjectId(obj["creationAccountCustomer"]._id) ;
          }
          
        }
        
    
        
        if(obj["orderShipped"] != undefined){
          
          if(_.isString(obj["orderShipped"])){
            obj["orderShipped"] = new mongo.ObjectId(obj["orderShipped"]);
          }else if(obj["orderShipped"]._id){
            obj["orderShipped"] = new mongo.ObjectId(obj["orderShipped"]._id) ;
          }
          
        }
        
    
        
        if(obj["customerReview"] != undefined){
          
          if(_.isString(obj["customerReview"])){
            obj["customerReview"] = new mongo.ObjectId(obj["customerReview"]);
          }else if(obj["customerReview"]._id){
            obj["customerReview"] = new mongo.ObjectId(obj["customerReview"]._id) ;
          }
          
        }
        
    
        
        if(obj["sellerCustomerRequest"] != undefined){
          
          if(_.isString(obj["sellerCustomerRequest"])){
            obj["sellerCustomerRequest"] = new mongo.ObjectId(obj["sellerCustomerRequest"]);
          }else if(obj["sellerCustomerRequest"]._id){
            obj["sellerCustomerRequest"] = new mongo.ObjectId(obj["sellerCustomerRequest"]._id) ;
          }
          
        }
        
    
        
        if(obj["qbpRamassesDpd"] != undefined){
          
          if(_.isString(obj["qbpRamassesDpd"])){
            obj["qbpRamassesDpd"] = new mongo.ObjectId(obj["qbpRamassesDpd"]);
          }else if(obj["qbpRamassesDpd"]._id){
            obj["qbpRamassesDpd"] = new mongo.ObjectId(obj["qbpRamassesDpd"]._id) ;
          }
          
        }
        
    
        
        if(obj["sellerOrderPreparation"] != undefined){
          
          if(_.isString(obj["sellerOrderPreparation"])){
            obj["sellerOrderPreparation"] = new mongo.ObjectId(obj["sellerOrderPreparation"]);
          }else if(obj["sellerOrderPreparation"]._id){
            obj["sellerOrderPreparation"] = new mongo.ObjectId(obj["sellerOrderPreparation"]._id) ;
          }
          
        }
        
    
        
        if(obj["qbpProductRequest"] != undefined){
          
          if(_.isString(obj["qbpProductRequest"])){
            obj["qbpProductRequest"] = new mongo.ObjectId(obj["qbpProductRequest"]);
          }else if(obj["qbpProductRequest"]._id){
            obj["qbpProductRequest"] = new mongo.ObjectId(obj["qbpProductRequest"]._id) ;
          }
          
        }
        
    
        
        if(obj["confirmOrderCustomer"] != undefined){
          
          if(_.isString(obj["confirmOrderCustomer"])){
            obj["confirmOrderCustomer"] = new mongo.ObjectId(obj["confirmOrderCustomer"]);
          }else if(obj["confirmOrderCustomer"]._id){
            obj["confirmOrderCustomer"] = new mongo.ObjectId(obj["confirmOrderCustomer"]._id) ;
          }
          
        }
        
    
        
        if(obj["notifyDpd"] != undefined){
          
           obj["notifyDpd"] = new Boolean(obj["notifyDpd"]).valueOf() ;
          
        }
        
    
        
        if(obj["sellerMessage"] != undefined){
          
          if(_.isString(obj["sellerMessage"])){
            obj["sellerMessage"] = new mongo.ObjectId(obj["sellerMessage"]);
          }else if(obj["sellerMessage"]._id){
            obj["sellerMessage"] = new mongo.ObjectId(obj["sellerMessage"]._id) ;
          }
          
        }
        
    
        
        if(obj["customerContactMessage"] != undefined){
          
          if(_.isString(obj["customerContactMessage"])){
            obj["customerContactMessage"] = new mongo.ObjectId(obj["customerContactMessage"]);
          }else if(obj["customerContactMessage"]._id){
            obj["customerContactMessage"] = new mongo.ObjectId(obj["customerContactMessage"]._id) ;
          }
          
        }
        
    
        
        if(obj["contactMessage"] != undefined){
          
          if(_.isString(obj["contactMessage"])){
            obj["contactMessage"] = new mongo.ObjectId(obj["contactMessage"]);
          }else if(obj["contactMessage"]._id){
            obj["contactMessage"] = new mongo.ObjectId(obj["contactMessage"]._id) ;
          }
          
        }
        
    
        
        if(obj["customerInvoiceRequest"] != undefined){
          
          if(_.isString(obj["customerInvoiceRequest"])){
            obj["customerInvoiceRequest"] = new mongo.ObjectId(obj["customerInvoiceRequest"]);
          }else if(obj["customerInvoiceRequest"]._id){
            obj["customerInvoiceRequest"] = new mongo.ObjectId(obj["customerInvoiceRequest"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesMessageCustomer"] != undefined){
          
          if(_.isString(obj["afterSalesMessageCustomer"])){
            obj["afterSalesMessageCustomer"] = new mongo.ObjectId(obj["afterSalesMessageCustomer"]);
          }else if(obj["afterSalesMessageCustomer"]._id){
            obj["afterSalesMessageCustomer"] = new mongo.ObjectId(obj["afterSalesMessageCustomer"]._id) ;
          }
          
        }
        
    
        
        if(obj["afterSalesMessageSeller"] != undefined){
          
          if(_.isString(obj["afterSalesMessageSeller"])){
            obj["afterSalesMessageSeller"] = new mongo.ObjectId(obj["afterSalesMessageSeller"]);
          }else if(obj["afterSalesMessageSeller"]._id){
            obj["afterSalesMessageSeller"] = new mongo.ObjectId(obj["afterSalesMessageSeller"]._id) ;
          }
          
        }
        
    
        
        if(obj["qbpRelaisRamassesDpd"] != undefined){
          
          if(_.isString(obj["qbpRelaisRamassesDpd"])){
            obj["qbpRelaisRamassesDpd"] = new mongo.ObjectId(obj["qbpRelaisRamassesDpd"]);
          }else if(obj["qbpRelaisRamassesDpd"]._id){
            obj["qbpRelaisRamassesDpd"] = new mongo.ObjectId(obj["qbpRelaisRamassesDpd"]._id) ;
          }
          
        }
        
    
        
        if(obj["qbpAfterSalesClose"] != undefined){
          
          if(_.isString(obj["qbpAfterSalesClose"])){
            obj["qbpAfterSalesClose"] = new mongo.ObjectId(obj["qbpAfterSalesClose"]);
          }else if(obj["qbpAfterSalesClose"]._id){
            obj["qbpAfterSalesClose"] = new mongo.ObjectId(obj["qbpAfterSalesClose"]._id) ;
          }
          
        }
        
    
        
        if(obj["qbpBankWireInformations"] != undefined){
          
          if(_.isString(obj["qbpBankWireInformations"])){
            obj["qbpBankWireInformations"] = new mongo.ObjectId(obj["qbpBankWireInformations"]);
          }else if(obj["qbpBankWireInformations"]._id){
            obj["qbpBankWireInformations"] = new mongo.ObjectId(obj["qbpBankWireInformations"]._id) ;
          }
          
        }
        
    
        
        if(obj["bankWirePayinError"] != undefined){
          
          if(_.isString(obj["bankWirePayinError"])){
            obj["bankWirePayinError"] = new mongo.ObjectId(obj["bankWirePayinError"]);
          }else if(obj["bankWirePayinError"]._id){
            obj["bankWirePayinError"] = new mongo.ObjectId(obj["bankWirePayinError"]._id) ;
          }
          
        }
        
    
        
        if(obj["retractationDeliveredToSeller"] != undefined){
          
          if(_.isString(obj["retractationDeliveredToSeller"])){
            obj["retractationDeliveredToSeller"] = new mongo.ObjectId(obj["retractationDeliveredToSeller"]);
          }else if(obj["retractationDeliveredToSeller"]._id){
            obj["retractationDeliveredToSeller"] = new mongo.ObjectId(obj["retractationDeliveredToSeller"]._id) ;
          }
          
        }
        
    
        
        if(obj["savReturnDeliveredToSeller"] != undefined){
          
          if(_.isString(obj["savReturnDeliveredToSeller"])){
            obj["savReturnDeliveredToSeller"] = new mongo.ObjectId(obj["savReturnDeliveredToSeller"]);
          }else if(obj["savReturnDeliveredToSeller"]._id){
            obj["savReturnDeliveredToSeller"] = new mongo.ObjectId(obj["savReturnDeliveredToSeller"]._id) ;
          }
          
        }
        
    
        
        if(obj["fourteenDaysBackConfirmation"] != undefined){
          
          if(_.isString(obj["fourteenDaysBackConfirmation"])){
            obj["fourteenDaysBackConfirmation"] = new mongo.ObjectId(obj["fourteenDaysBackConfirmation"]);
          }else if(obj["fourteenDaysBackConfirmation"]._id){
            obj["fourteenDaysBackConfirmation"] = new mongo.ObjectId(obj["fourteenDaysBackConfirmation"]._id) ;
          }
          
        }
        
    
  }


 

public static checkqbpEmailContact(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksenderEmail(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksenderName(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkqbpBaseUrl(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkqbpSendgridApiUrl(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkorderCanceled(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkorderDeliveryDelais(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesRequest(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfourteenDaysBackPickingConfirmed(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfourteenDaysBackRefundAccepted(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfourteenDaysBackShippingLabel(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfourteenDaysBackRequest(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfourteenDaysBackRefusal(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfourteenDaysBackRefund(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesAccepted(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesShippingLabel(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesPickingConfirmed(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesDelivered(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesRefusal(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesVendorRefusal(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkorderPreparation(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkorderDelivered(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkerrorPasswordCustomer(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkrefund(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkinfoShipmentCustomer(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcreationAccountCustomer(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkorderShipped(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcustomerReview(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksellerCustomerRequest(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkqbpRamassesDpd(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksellerOrderPreparation(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkqbpProductRequest(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkconfirmOrderCustomer(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checknotifyDpd(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksellerMessage(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcustomerContactMessage(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcontactMessage(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcustomerInvoiceRequest(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesMessageCustomer(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkafterSalesMessageSeller(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkqbpRelaisRamassesDpd(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkqbpAfterSalesClose(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkqbpBankWireInformations(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkbankWirePayinError(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkretractationDeliveredToSeller(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksavReturnDeliveredToSeller(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkfourteenDaysBackConfirmation(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          
          
              

              

              if(target.qbpEmailContact != null && target.qbpEmailContact != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpEmailContact(target.qbpEmailContact , `${path}.qbpEmailContact`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.senderEmail != null && target.senderEmail != undefined ){
                
                
                res = Entity_QbpMailer.checksenderEmail(target.senderEmail , `${path}.senderEmail`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.senderName != null && target.senderName != undefined ){
                
                
                res = Entity_QbpMailer.checksenderName(target.senderName , `${path}.senderName`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpBaseUrl != null && target.qbpBaseUrl != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpBaseUrl(target.qbpBaseUrl , `${path}.qbpBaseUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpSendgridApiUrl != null && target.qbpSendgridApiUrl != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpSendgridApiUrl(target.qbpSendgridApiUrl , `${path}.qbpSendgridApiUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.orderCanceled != null && target.orderCanceled != undefined ){
                
                
                res = Entity_QbpMailer.checkorderCanceled(target.orderCanceled , `${path}.orderCanceled`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.orderDeliveryDelais != null && target.orderDeliveryDelais != undefined ){
                
                
                res = Entity_QbpMailer.checkorderDeliveryDelais(target.orderDeliveryDelais , `${path}.orderDeliveryDelais`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesRequest != null && target.afterSalesRequest != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesRequest(target.afterSalesRequest , `${path}.afterSalesRequest`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fourteenDaysBackPickingConfirmed != null && target.fourteenDaysBackPickingConfirmed != undefined ){
                
                
                res = Entity_QbpMailer.checkfourteenDaysBackPickingConfirmed(target.fourteenDaysBackPickingConfirmed , `${path}.fourteenDaysBackPickingConfirmed`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fourteenDaysBackRefundAccepted != null && target.fourteenDaysBackRefundAccepted != undefined ){
                
                
                res = Entity_QbpMailer.checkfourteenDaysBackRefundAccepted(target.fourteenDaysBackRefundAccepted , `${path}.fourteenDaysBackRefundAccepted`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fourteenDaysBackShippingLabel != null && target.fourteenDaysBackShippingLabel != undefined ){
                
                
                res = Entity_QbpMailer.checkfourteenDaysBackShippingLabel(target.fourteenDaysBackShippingLabel , `${path}.fourteenDaysBackShippingLabel`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fourteenDaysBackRequest != null && target.fourteenDaysBackRequest != undefined ){
                
                
                res = Entity_QbpMailer.checkfourteenDaysBackRequest(target.fourteenDaysBackRequest , `${path}.fourteenDaysBackRequest`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fourteenDaysBackRefusal != null && target.fourteenDaysBackRefusal != undefined ){
                
                
                res = Entity_QbpMailer.checkfourteenDaysBackRefusal(target.fourteenDaysBackRefusal , `${path}.fourteenDaysBackRefusal`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fourteenDaysBackRefund != null && target.fourteenDaysBackRefund != undefined ){
                
                
                res = Entity_QbpMailer.checkfourteenDaysBackRefund(target.fourteenDaysBackRefund , `${path}.fourteenDaysBackRefund`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesAccepted != null && target.afterSalesAccepted != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesAccepted(target.afterSalesAccepted , `${path}.afterSalesAccepted`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesShippingLabel != null && target.afterSalesShippingLabel != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesShippingLabel(target.afterSalesShippingLabel , `${path}.afterSalesShippingLabel`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesPickingConfirmed != null && target.afterSalesPickingConfirmed != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesPickingConfirmed(target.afterSalesPickingConfirmed , `${path}.afterSalesPickingConfirmed`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesDelivered != null && target.afterSalesDelivered != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesDelivered(target.afterSalesDelivered , `${path}.afterSalesDelivered`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesRefusal != null && target.afterSalesRefusal != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesRefusal(target.afterSalesRefusal , `${path}.afterSalesRefusal`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesVendorRefusal != null && target.afterSalesVendorRefusal != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesVendorRefusal(target.afterSalesVendorRefusal , `${path}.afterSalesVendorRefusal`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.orderPreparation != null && target.orderPreparation != undefined ){
                
                
                res = Entity_QbpMailer.checkorderPreparation(target.orderPreparation , `${path}.orderPreparation`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.orderDelivered != null && target.orderDelivered != undefined ){
                
                
                res = Entity_QbpMailer.checkorderDelivered(target.orderDelivered , `${path}.orderDelivered`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.errorPasswordCustomer != null && target.errorPasswordCustomer != undefined ){
                
                
                res = Entity_QbpMailer.checkerrorPasswordCustomer(target.errorPasswordCustomer , `${path}.errorPasswordCustomer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.refund != null && target.refund != undefined ){
                
                
                res = Entity_QbpMailer.checkrefund(target.refund , `${path}.refund`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.infoShipmentCustomer != null && target.infoShipmentCustomer != undefined ){
                
                
                res = Entity_QbpMailer.checkinfoShipmentCustomer(target.infoShipmentCustomer , `${path}.infoShipmentCustomer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.creationAccountCustomer != null && target.creationAccountCustomer != undefined ){
                
                
                res = Entity_QbpMailer.checkcreationAccountCustomer(target.creationAccountCustomer , `${path}.creationAccountCustomer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.orderShipped != null && target.orderShipped != undefined ){
                
                
                res = Entity_QbpMailer.checkorderShipped(target.orderShipped , `${path}.orderShipped`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.customerReview != null && target.customerReview != undefined ){
                
                
                res = Entity_QbpMailer.checkcustomerReview(target.customerReview , `${path}.customerReview`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerCustomerRequest != null && target.sellerCustomerRequest != undefined ){
                
                
                res = Entity_QbpMailer.checksellerCustomerRequest(target.sellerCustomerRequest , `${path}.sellerCustomerRequest`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpRamassesDpd != null && target.qbpRamassesDpd != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpRamassesDpd(target.qbpRamassesDpd , `${path}.qbpRamassesDpd`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerOrderPreparation != null && target.sellerOrderPreparation != undefined ){
                
                
                res = Entity_QbpMailer.checksellerOrderPreparation(target.sellerOrderPreparation , `${path}.sellerOrderPreparation`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpProductRequest != null && target.qbpProductRequest != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpProductRequest(target.qbpProductRequest , `${path}.qbpProductRequest`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.confirmOrderCustomer != null && target.confirmOrderCustomer != undefined ){
                
                
                res = Entity_QbpMailer.checkconfirmOrderCustomer(target.confirmOrderCustomer , `${path}.confirmOrderCustomer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.notifyDpd != null && target.notifyDpd != undefined ){
                
                
                res = Entity_QbpMailer.checknotifyDpd(target.notifyDpd , `${path}.notifyDpd`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sellerMessage != null && target.sellerMessage != undefined ){
                
                
                res = Entity_QbpMailer.checksellerMessage(target.sellerMessage , `${path}.sellerMessage`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.customerContactMessage != null && target.customerContactMessage != undefined ){
                
                
                res = Entity_QbpMailer.checkcustomerContactMessage(target.customerContactMessage , `${path}.customerContactMessage`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.contactMessage != null && target.contactMessage != undefined ){
                
                
                res = Entity_QbpMailer.checkcontactMessage(target.contactMessage , `${path}.contactMessage`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.customerInvoiceRequest != null && target.customerInvoiceRequest != undefined ){
                
                
                res = Entity_QbpMailer.checkcustomerInvoiceRequest(target.customerInvoiceRequest , `${path}.customerInvoiceRequest`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesMessageCustomer != null && target.afterSalesMessageCustomer != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesMessageCustomer(target.afterSalesMessageCustomer , `${path}.afterSalesMessageCustomer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.afterSalesMessageSeller != null && target.afterSalesMessageSeller != undefined ){
                
                
                res = Entity_QbpMailer.checkafterSalesMessageSeller(target.afterSalesMessageSeller , `${path}.afterSalesMessageSeller`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpRelaisRamassesDpd != null && target.qbpRelaisRamassesDpd != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpRelaisRamassesDpd(target.qbpRelaisRamassesDpd , `${path}.qbpRelaisRamassesDpd`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpAfterSalesClose != null && target.qbpAfterSalesClose != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpAfterSalesClose(target.qbpAfterSalesClose , `${path}.qbpAfterSalesClose`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpBankWireInformations != null && target.qbpBankWireInformations != undefined ){
                
                
                res = Entity_QbpMailer.checkqbpBankWireInformations(target.qbpBankWireInformations , `${path}.qbpBankWireInformations`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.bankWirePayinError != null && target.bankWirePayinError != undefined ){
                
                
                res = Entity_QbpMailer.checkbankWirePayinError(target.bankWirePayinError , `${path}.bankWirePayinError`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.retractationDeliveredToSeller != null && target.retractationDeliveredToSeller != undefined ){
                
                
                res = Entity_QbpMailer.checkretractationDeliveredToSeller(target.retractationDeliveredToSeller , `${path}.retractationDeliveredToSeller`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.savReturnDeliveredToSeller != null && target.savReturnDeliveredToSeller != undefined ){
                
                
                res = Entity_QbpMailer.checksavReturnDeliveredToSeller(target.savReturnDeliveredToSeller , `${path}.savReturnDeliveredToSeller`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fourteenDaysBackConfirmation != null && target.fourteenDaysBackConfirmation != undefined ){
                
                
                res = Entity_QbpMailer.checkfourteenDaysBackConfirmation(target.fourteenDaysBackConfirmation , `${path}.fourteenDaysBackConfirmation`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
           

        return err ;
      }
   
public static castQueryParam(path: string, value: any): any {
        let key:string = '' ;
        let subPath:string = '' ;

        if(value === null){
          return null ;
        }
        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} ${value}`)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path} ${value}`)
        }
        switch (key) {
          
            case 'qbpEmailContact':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'senderEmail':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'senderName':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpBaseUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpSendgridApiUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'orderCanceled':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'orderDeliveryDelais':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesRequest':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'fourteenDaysBackPickingConfirmed':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'fourteenDaysBackRefundAccepted':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'fourteenDaysBackShippingLabel':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'fourteenDaysBackRequest':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'fourteenDaysBackRefusal':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'fourteenDaysBackRefund':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesAccepted':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesShippingLabel':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesPickingConfirmed':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesDelivered':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesRefusal':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesVendorRefusal':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'orderPreparation':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'orderDelivered':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'errorPasswordCustomer':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'refund':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'infoShipmentCustomer':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'creationAccountCustomer':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'orderShipped':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'customerReview':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'sellerCustomerRequest':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'qbpRamassesDpd':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'sellerOrderPreparation':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'qbpProductRequest':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'confirmOrderCustomer':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'notifyDpd':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'sellerMessage':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'customerContactMessage':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'contactMessage':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'customerInvoiceRequest':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesMessageCustomer':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'afterSalesMessageSeller':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'qbpRelaisRamassesDpd':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'qbpAfterSalesClose':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'qbpBankWireInformations':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'bankWirePayinError':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'retractationDeliveredToSeller':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'savReturnDeliveredToSeller':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'fourteenDaysBackConfirmation':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
         
          default:
            return Entity.castQueryParam(key, value) ;
            break;
        }
      }

public static getClassNameOfProp(path:string):string{
        let key:string = '' ;
        let subPath:string = '' ;

        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} `)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path}`)
        }
        switch (key) {
          
      
      case 'qbpEmailContact':
       
             return null ;
       
        
       
      
      
      case 'senderEmail':
       
             return null ;
       
        
       
      
      
      case 'senderName':
       
             return null ;
       
        
       
      
      
      case 'qbpBaseUrl':
       
             return null ;
       
        
       
      
      
      case 'qbpSendgridApiUrl':
       
             return null ;
       
        
       
      
      
      case 'orderCanceled':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'orderDeliveryDelais':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesRequest':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'fourteenDaysBackPickingConfirmed':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'fourteenDaysBackRefundAccepted':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'fourteenDaysBackShippingLabel':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'fourteenDaysBackRequest':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'fourteenDaysBackRefusal':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'fourteenDaysBackRefund':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesAccepted':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesShippingLabel':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesPickingConfirmed':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesDelivered':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesRefusal':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesVendorRefusal':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'orderPreparation':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'orderDelivered':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'errorPasswordCustomer':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'refund':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'infoShipmentCustomer':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'creationAccountCustomer':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'orderShipped':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'customerReview':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'sellerCustomerRequest':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'qbpRamassesDpd':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'sellerOrderPreparation':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'qbpProductRequest':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'confirmOrderCustomer':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'notifyDpd':
       
             return null ;
       
        
       
      
      
      case 'sellerMessage':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'customerContactMessage':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'contactMessage':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'customerInvoiceRequest':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesMessageCustomer':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'afterSalesMessageSeller':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'qbpRelaisRamassesDpd':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'qbpAfterSalesClose':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'qbpBankWireInformations':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'bankWirePayinError':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'retractationDeliveredToSeller':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'savReturnDeliveredToSeller':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
      case 'fourteenDaysBackConfirmation':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



