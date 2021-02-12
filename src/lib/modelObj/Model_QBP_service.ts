import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service métier de QBP
*/
export class Model_QBP_service extends   Model_service   implements Interface.IQBP_service {

/**
  service métier de QBP
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["QbpBddUrl"] != undefined){
          
           this["QbpBddUrl"] = obj["QbpBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoApiUrl"] != undefined){
          
           this["ssoApiUrl"] = obj["ssoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceApiUrl"] != undefined){
          
           this["licenceApiUrl"] = obj["licenceApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["sendgridApiUrl"] != undefined){
          
           this["sendgridApiUrl"] = obj["sendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["appId"] != undefined){
          
          if(_.isString(obj["appId"])){
            this["appId"] = obj["appId"];
          }else if(obj["appId"]._id){
            this["appId"] = obj["appId"]._id ;
          }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }
          
        }
        
    
        
        if(obj["licenceStoreId"] != undefined){
          
           this["licenceStoreId"] = obj["licenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           this["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["sellerAppId"] != undefined){
          
          if(_.isString(obj["sellerAppId"])){
            this["sellerAppId"] = obj["sellerAppId"];
          }else if(obj["sellerAppId"]._id){
            this["sellerAppId"] = obj["sellerAppId"]._id ;
          }
          
        }
        
    
        
        if(obj["sellerLicenceStoreId"] != undefined){
          
           this["sellerLicenceStoreId"] = obj["sellerLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
          if(_.isString(obj["adminAppId"])){
            this["adminAppId"] = obj["adminAppId"];
          }else if(obj["adminAppId"]._id){
            this["adminAppId"] = obj["adminAppId"]._id ;
          }
          
        }
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           this["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["sellerSso_Client_template"] != undefined){
          
           this["sellerSso_Client_template"] = obj["sellerSso_Client_template"].toString() ;
           
        }
        
    
        
        if(obj["sellerEndClientTemplate"] != undefined){
          
          if(_.isString(obj["sellerEndClientTemplate"])){
            this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"];
          }else if(obj["sellerEndClientTemplate"]._id){
            this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"]._id ;
          }
          
        }
        
    
        
        if(obj["sellerAppInstanceTemplate"] != undefined){
          
          if(_.isString(obj["sellerAppInstanceTemplate"])){
            this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"];
          }else if(obj["sellerAppInstanceTemplate"]._id){
            this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "QBP_service" ;

        
              /**
        url de la bdd QBP
        */
               public "QbpBddUrl"?:string ;
              
       
              /**
        url de l'api du sso
        */
               public "ssoApiUrl"?:string ;
              
       
              /**
        licenceApiUrl
        */
               public "licenceApiUrl"?:string ;
              
       
              /**
        sendgridApiUrl
        */
               public "sendgridApiUrl"?:string ;
              
       
              /**
        appId
        */
               public "appId"?:string ;
              
       
              /**
        end_client
        */
               public "end_client"?:string ;
              
       
              /**
        licenceStoreId
        */
               public "licenceStoreId"?:string ;
              
       
              /**
        url su service de bdd
        */
               public "ssoBddUrl"?:string ;
              
       
              /**
        client_id sso
        */
               public "client_id"?:string ;
              
       
              /**
        client_secret du sso
        */
               public "client_secret"?:string ;
              
       
              /**
        application instance id of seller
        */
               public "sellerAppId":string ;
              
       
              /**
        licenceStore for seller user licence
        */
               public "sellerLicenceStoreId"?:string ;
              
       
              /**
        application instance id of the admin
        */
               public "adminAppId"?:string ;
              
       
              /**
        licenceStoreId for admin
        */
               public "adminLicenceStoreId"?:string ;
              
       
              /**
        url de la bdd d 'infra
        */
               public "infraBddUrl"?:string ;
              
       
              /**
        template du sso client
        */
               public "sellerSso_Client_template"?:string ;
              
       
              /**
        template du endClient seller
        */
               public "sellerEndClientTemplate"?:string ;
              
       
              /**
        template de l application instance du vendeur
        */
               public "sellerAppInstanceTemplate"?:string ;
              
       


       

   }
