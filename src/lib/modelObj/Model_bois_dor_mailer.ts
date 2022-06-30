import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  liste de tous les templates de mail pour bois d'or
*/
export class Model_bois_dor_mailer extends  Base  implements Interface.Ibois_dor_mailer {

/**
  liste de tous les templates de mail pour bois d'or
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["comptoirOr_info"] != undefined){
          
          if(_.isString(obj["comptoirOr_info"])){
            this["comptoirOr_info"] = obj["comptoirOr_info"];
          }else if(obj["comptoirOr_info"]._id){
            this["comptoirOr_info"] = obj["comptoirOr_info"]._id ;
          }else if(obj["comptoirOr_info"]._bsontype && (obj["comptoirOr_info"]._bsontype === 'ObjectID')){
              this["comptoirOr_info"] = obj["comptoirOr_info"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderDelivred"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderDelivred"])){
            this["boisdor_fr_orderDelivred"] = obj["boisdor_fr_orderDelivred"];
          }else if(obj["boisdor_fr_orderDelivred"]._id){
            this["boisdor_fr_orderDelivred"] = obj["boisdor_fr_orderDelivred"]._id ;
          }else if(obj["boisdor_fr_orderDelivred"]._bsontype && (obj["boisdor_fr_orderDelivred"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderDelivred"] = obj["boisdor_fr_orderDelivred"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderRegister"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderRegister"])){
            this["boisdor_fr_orderRegister"] = obj["boisdor_fr_orderRegister"];
          }else if(obj["boisdor_fr_orderRegister"]._id){
            this["boisdor_fr_orderRegister"] = obj["boisdor_fr_orderRegister"]._id ;
          }else if(obj["boisdor_fr_orderRegister"]._bsontype && (obj["boisdor_fr_orderRegister"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderRegister"] = obj["boisdor_fr_orderRegister"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_resetPassword"] != undefined){
          
          if(_.isString(obj["boisdor_fr_resetPassword"])){
            this["boisdor_fr_resetPassword"] = obj["boisdor_fr_resetPassword"];
          }else if(obj["boisdor_fr_resetPassword"]._id){
            this["boisdor_fr_resetPassword"] = obj["boisdor_fr_resetPassword"]._id ;
          }else if(obj["boisdor_fr_resetPassword"]._bsontype && (obj["boisdor_fr_resetPassword"]._bsontype === 'ObjectID')){
              this["boisdor_fr_resetPassword"] = obj["boisdor_fr_resetPassword"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_accountCreated"] != undefined){
          
          if(_.isString(obj["boisdor_fr_accountCreated"])){
            this["boisdor_fr_accountCreated"] = obj["boisdor_fr_accountCreated"];
          }else if(obj["boisdor_fr_accountCreated"]._id){
            this["boisdor_fr_accountCreated"] = obj["boisdor_fr_accountCreated"]._id ;
          }else if(obj["boisdor_fr_accountCreated"]._bsontype && (obj["boisdor_fr_accountCreated"]._bsontype === 'ObjectID')){
              this["boisdor_fr_accountCreated"] = obj["boisdor_fr_accountCreated"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderRefund"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderRefund"])){
            this["boisdor_fr_orderRefund"] = obj["boisdor_fr_orderRefund"];
          }else if(obj["boisdor_fr_orderRefund"]._id){
            this["boisdor_fr_orderRefund"] = obj["boisdor_fr_orderRefund"]._id ;
          }else if(obj["boisdor_fr_orderRefund"]._bsontype && (obj["boisdor_fr_orderRefund"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderRefund"] = obj["boisdor_fr_orderRefund"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderCancelled"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderCancelled"])){
            this["boisdor_fr_orderCancelled"] = obj["boisdor_fr_orderCancelled"];
          }else if(obj["boisdor_fr_orderCancelled"]._id){
            this["boisdor_fr_orderCancelled"] = obj["boisdor_fr_orderCancelled"]._id ;
          }else if(obj["boisdor_fr_orderCancelled"]._bsontype && (obj["boisdor_fr_orderCancelled"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderCancelled"] = obj["boisdor_fr_orderCancelled"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderValidatedForDelivery"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderValidatedForDelivery"])){
            this["boisdor_fr_orderValidatedForDelivery"] = obj["boisdor_fr_orderValidatedForDelivery"];
          }else if(obj["boisdor_fr_orderValidatedForDelivery"]._id){
            this["boisdor_fr_orderValidatedForDelivery"] = obj["boisdor_fr_orderValidatedForDelivery"]._id ;
          }else if(obj["boisdor_fr_orderValidatedForDelivery"]._bsontype && (obj["boisdor_fr_orderValidatedForDelivery"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderValidatedForDelivery"] = obj["boisdor_fr_orderValidatedForDelivery"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderValidatedForPickup"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderValidatedForPickup"])){
            this["boisdor_fr_orderValidatedForPickup"] = obj["boisdor_fr_orderValidatedForPickup"];
          }else if(obj["boisdor_fr_orderValidatedForPickup"]._id){
            this["boisdor_fr_orderValidatedForPickup"] = obj["boisdor_fr_orderValidatedForPickup"]._id ;
          }else if(obj["boisdor_fr_orderValidatedForPickup"]._bsontype && (obj["boisdor_fr_orderValidatedForPickup"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderValidatedForPickup"] = obj["boisdor_fr_orderValidatedForPickup"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToCustomer"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToCustomer"])){
            this["boisdor_fr_orderToCustomer"] = obj["boisdor_fr_orderToCustomer"];
          }else if(obj["boisdor_fr_orderToCustomer"]._id){
            this["boisdor_fr_orderToCustomer"] = obj["boisdor_fr_orderToCustomer"]._id ;
          }else if(obj["boisdor_fr_orderToCustomer"]._bsontype && (obj["boisdor_fr_orderToCustomer"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderToCustomer"] = obj["boisdor_fr_orderToCustomer"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToSeller"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToSeller"])){
            this["boisdor_fr_orderToSeller"] = obj["boisdor_fr_orderToSeller"];
          }else if(obj["boisdor_fr_orderToSeller"]._id){
            this["boisdor_fr_orderToSeller"] = obj["boisdor_fr_orderToSeller"]._id ;
          }else if(obj["boisdor_fr_orderToSeller"]._bsontype && (obj["boisdor_fr_orderToSeller"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderToSeller"] = obj["boisdor_fr_orderToSeller"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_sav"] != undefined){
          
          if(_.isString(obj["boisdor_fr_sav"])){
            this["boisdor_fr_sav"] = obj["boisdor_fr_sav"];
          }else if(obj["boisdor_fr_sav"]._id){
            this["boisdor_fr_sav"] = obj["boisdor_fr_sav"]._id ;
          }else if(obj["boisdor_fr_sav"]._bsontype && (obj["boisdor_fr_sav"]._bsontype === 'ObjectID')){
              this["boisdor_fr_sav"] = obj["boisdor_fr_sav"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_contact"] != undefined){
          
          if(_.isString(obj["boisdor_fr_contact"])){
            this["boisdor_fr_contact"] = obj["boisdor_fr_contact"];
          }else if(obj["boisdor_fr_contact"]._id){
            this["boisdor_fr_contact"] = obj["boisdor_fr_contact"]._id ;
          }else if(obj["boisdor_fr_contact"]._bsontype && (obj["boisdor_fr_contact"]._bsontype === 'ObjectID')){
              this["boisdor_fr_contact"] = obj["boisdor_fr_contact"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_reply_sav"] != undefined){
          
          if(_.isString(obj["boisdor_fr_reply_sav"])){
            this["boisdor_fr_reply_sav"] = obj["boisdor_fr_reply_sav"];
          }else if(obj["boisdor_fr_reply_sav"]._id){
            this["boisdor_fr_reply_sav"] = obj["boisdor_fr_reply_sav"]._id ;
          }else if(obj["boisdor_fr_reply_sav"]._bsontype && (obj["boisdor_fr_reply_sav"]._bsontype === 'ObjectID')){
              this["boisdor_fr_reply_sav"] = obj["boisdor_fr_reply_sav"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_reply_contact"] != undefined){
          
          if(_.isString(obj["boisdor_fr_reply_contact"])){
            this["boisdor_fr_reply_contact"] = obj["boisdor_fr_reply_contact"];
          }else if(obj["boisdor_fr_reply_contact"]._id){
            this["boisdor_fr_reply_contact"] = obj["boisdor_fr_reply_contact"]._id ;
          }else if(obj["boisdor_fr_reply_contact"]._bsontype && (obj["boisdor_fr_reply_contact"]._bsontype === 'ObjectID')){
              this["boisdor_fr_reply_contact"] = obj["boisdor_fr_reply_contact"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToCustomerPending"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToCustomerPending"])){
            this["boisdor_fr_orderToCustomerPending"] = obj["boisdor_fr_orderToCustomerPending"];
          }else if(obj["boisdor_fr_orderToCustomerPending"]._id){
            this["boisdor_fr_orderToCustomerPending"] = obj["boisdor_fr_orderToCustomerPending"]._id ;
          }else if(obj["boisdor_fr_orderToCustomerPending"]._bsontype && (obj["boisdor_fr_orderToCustomerPending"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderToCustomerPending"] = obj["boisdor_fr_orderToCustomerPending"] ;
            }
          
        }
        
    
        
        if(obj["boisdor_fr_orderToCustomerDiff"] != undefined){
          
          if(_.isString(obj["boisdor_fr_orderToCustomerDiff"])){
            this["boisdor_fr_orderToCustomerDiff"] = obj["boisdor_fr_orderToCustomerDiff"];
          }else if(obj["boisdor_fr_orderToCustomerDiff"]._id){
            this["boisdor_fr_orderToCustomerDiff"] = obj["boisdor_fr_orderToCustomerDiff"]._id ;
          }else if(obj["boisdor_fr_orderToCustomerDiff"]._bsontype && (obj["boisdor_fr_orderToCustomerDiff"]._bsontype === 'ObjectID')){
              this["boisdor_fr_orderToCustomerDiff"] = obj["boisdor_fr_orderToCustomerDiff"] ;
            }
          
        }
        
    
  }
  

    public _class:string  = "bois_dor_mailer" ;

        
              /**
        comptoirOr_info
        */
               public "comptoirOr_info"?:string ;
              
       
              /**
        boisdor_fr_orderDelivred
        */
               public "boisdor_fr_orderDelivred"?:string ;
              
       
              /**
        boisdor_fr_orderRegister
        */
               public "boisdor_fr_orderRegister"?:string ;
              
       
              /**
        boisdor_fr_resetPassword
        */
               public "boisdor_fr_resetPassword"?:string ;
              
       
              /**
        boisdor_fr_accountCreated
        */
               public "boisdor_fr_accountCreated"?:string ;
              
       
              /**
        boisdor_fr_orderRefund
        */
               public "boisdor_fr_orderRefund"?:string ;
              
       
              /**
        boisdor_fr_orderCancelled
        */
               public "boisdor_fr_orderCancelled"?:string ;
              
       
              /**
        boisdor_fr_orderValidatedForDelivery
        */
               public "boisdor_fr_orderValidatedForDelivery"?:string ;
              
       
              /**
        boisdor_fr_orderValidatedForPickup
        */
               public "boisdor_fr_orderValidatedForPickup"?:string ;
              
       
              /**
        boisdor_fr_orderToCustomer
        */
               public "boisdor_fr_orderToCustomer"?:string ;
              
       
              /**
        boisdor_fr_orderToSeller
        */
               public "boisdor_fr_orderToSeller"?:string ;
              
       
              /**
        boisdor_fr_sav
        */
               public "boisdor_fr_sav"?:string ;
              
       
              /**
        boisdor_fr_contact
        */
               public "boisdor_fr_contact"?:string ;
              
       
              /**
        boisdor_fr_reply_sav
        */
               public "boisdor_fr_reply_sav"?:string ;
              
       
              /**
        boisdor_fr_reply_contact
        */
               public "boisdor_fr_reply_contact"?:string ;
              
       
              /**
        boisdor_fr_orderToCustomerPending
        */
               public "boisdor_fr_orderToCustomerPending"?:string ;
              
       
              /**
        boisdor_fr_orderToCustomerDiff
        */
               public "boisdor_fr_orderToCustomerDiff"?:string ;
              
       


       

   }
