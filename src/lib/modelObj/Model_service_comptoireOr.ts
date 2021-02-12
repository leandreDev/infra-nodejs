import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service_comptoireOr
*/
export class Model_service_comptoireOr extends   Model_service   implements Interface.Iservice_comptoireOr {

/**
  service_comptoireOr
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddApiUrl"] != undefined){
          
           this["bddApiUrl"] = obj["bddApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoApiUrl"] != undefined){
          
           this["ssoApiUrl"] = obj["ssoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceApiUrl"] != undefined){
          
           this["licenceApiUrl"] = obj["licenceApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           this["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["adminConfId"] != undefined){
          
          if(_.isString(obj["adminConfId"])){
            this["adminConfId"] = obj["adminConfId"];
          }else if(obj["adminConfId"]._id){
            this["adminConfId"] = obj["adminConfId"]._id ;
          }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }
          
        }
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
          if(_.isString(obj["adminAppId"])){
            this["adminAppId"] = obj["adminAppId"];
          }else if(obj["adminAppId"]._id){
            this["adminAppId"] = obj["adminAppId"]._id ;
          }
          
        }
        
    
        
        if(obj["sendgridApiUrl"] != undefined){
          
           this["sendgridApiUrl"] = obj["sendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["senderName"] != undefined){
          
           this["senderName"] = obj["senderName"].toString() ;
           
        }
        
    
        
        if(obj["senderEmail"] != undefined){
          
           this["senderEmail"] = obj["senderEmail"].toString() ;
           
        }
        
    
        
        if(obj["transactionEmailTemplate"] != undefined){
          
          if(_.isString(obj["transactionEmailTemplate"])){
            this["transactionEmailTemplate"] = obj["transactionEmailTemplate"];
          }else if(obj["transactionEmailTemplate"]._id){
            this["transactionEmailTemplate"] = obj["transactionEmailTemplate"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "service_comptoireOr" ;

        
              /**
        bddApiUrl
        */
               public "bddApiUrl"?:string ;
              
       
              /**
        url du service de bdd du sso
        */
               public "ssoApiUrl"?:string ;
              
       
              /**
        licenceApiUrl
        */
               public "licenceApiUrl"?:string ;
              
       
              /**
        url de la bdd infra
        */
               public "infraBddUrl"?:string ;
              
       
              /**
        Id de la configuration de l'app admin
        */
               public "adminConfId"?:string ;
              
       
              /**
        end_client
        */
               public "end_client"?:string ;
              
       
              /**
        adminLicenceStoreId
        */
               public "adminLicenceStoreId"?:string ;
              
       
              /**
        id de l'app adminApp
        */
               public "adminAppId"?:string ;
              
       
              /**
        url de l api send grid
        */
               public "sendgridApiUrl"?:string ;
              
       
              /**
        nom de l emeteur
        */
               public "senderName"?:string ;
              
       
              /**
        email de l'emeteur
        */
               public "senderEmail"?:string ;
              
       
              /**
        template du mail envoyé lors d une transaction
        */
               public "transactionEmailTemplate"?:string ;
              
       


       

   }
