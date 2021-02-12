import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service celio back_task
*/
export class Model_service_celio_back_task extends   Model_service   implements Interface.Iservice_celio_back_task {

/**
  service celio back_task
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["fidBddUrl"] != undefined){
          
           this["fidBddUrl"] = obj["fidBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["qcmBddUrl"] != undefined){
          
           this["qcmBddUrl"] = obj["qcmBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceFidUrl"] != undefined){
          
           this["serviceFidUrl"] = obj["serviceFidUrl"].toString() ;
           
        }
        
    
        
        if(obj["siteId"] != undefined){
          
           this["siteId"] = obj["siteId"].toString() ;
           
        }
        
    
        
        if(obj["secretToken"] != undefined){
          
           this["secretToken"] = obj["secretToken"].toString() ;
           
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           this["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["caPath"] != undefined){
          
           this["caPath"] = obj["caPath"].toString() ;
           
        }
        
    
        
        if(obj["hybrisUrl"] != undefined){
          
           this["hybrisUrl"] = obj["hybrisUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           this["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["marketingCloudApisConf"] != undefined){
          
            if(obj["marketingCloudApisConf"]._class){
              this["marketingCloudApisConf"] =  new Index[obj["marketingCloudApisConf"]._class](obj["marketingCloudApisConf"]) ;
            }else{
              this["marketingCloudApisConf"] =  new Index["MarketingCloudApisConf"](obj["marketingCloudApisConf"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "service_celio_back_task" ;

        
              /**
        url du service de bdd fid
        */
               public "fidBddUrl":string ;
              
       
              /**
        url du service de bdd qcm
        */
               public "qcmBddUrl":string ;
              
       
              /**
        url du service fid
        */
               public "serviceFidUrl":string ;
              
       
              /**
        site id de hybris
        */
               public "siteId"?:string ;
              
       
              /**
        secretToken apm
        */
               public "secretToken"?:string ;
              
       
              /**
        serverUrl apm
        */
               public "serverUrl"?:string ;
              
       
              /**
        chemin vers le certificat de bd, si il est renseigné, il active la connexion ssl
        */
               public "caPath"?:string ;
              
       
              /**
        url du service hybris
        */
               public "hybrisUrl":string ;
              
       
              /**
        client_id hybris
        */
               public "client_id":string ;
              
       
              /**
        client_secret hybris
        */
               public "client_secret":string ;
              
       
              /**
        url de l accessToken
        */
               public "accessTokenUrl":string ;
              
       
              /**
        MarketingCloudApisConf
        */
               public "marketingCloudApisConf"?:Interface.IMarketingCloudApisConf;
              
       


       

   }
