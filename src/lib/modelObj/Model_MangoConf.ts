import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  Données de configuration
*/
export class Model_MangoConf extends  Base  implements Interface.IMangoConf {

/**
  Données de configuration
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["clientId"] != undefined){
          
           this["clientId"] = obj["clientId"].toString() ;
           
        }
        
    
        
        if(obj["version"] != undefined){
          
           this["version"] = obj["version"].toString() ;
           
        }
        
    
        
        if(obj["apiKey"] != undefined){
          
           this["apiKey"] = obj["apiKey"].toString() ;
           
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           this["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["paymentRedirectUrl"] != undefined){
          
           this["paymentRedirectUrl"] = obj["paymentRedirectUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientUserId"] != undefined){
          
           this["clientUserId"] = obj["clientUserId"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "MangoConf" ;

        
              /**
        Identifiant client spécifié au moment de l'activation de compte mango
        */
               public "clientId":string ;
              
       
              /**
        API MangoPay Version
        */
               public "version":string ;
              
       
              /**
        Clé secrète de l'API communiquée à l'activation de compte
        */
               public "apiKey":string ;
              
       
              /**
        url de base de l'api mango
        */
               public "serverUrl":string ;
              
       
              /**
        url de redirection après paiement
        */
               public "paymentRedirectUrl"?:string ;
              
       
              /**
        UserId propriétaire de l'instance mangopay
        */
               public "clientUserId"?:string ;
              
       


       

   }
