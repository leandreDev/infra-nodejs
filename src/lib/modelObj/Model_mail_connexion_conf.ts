import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  associe un mail a une configuration de connexion sso+ app
*/
export class Model_mail_connexion_conf extends  Base  implements Interface.Imail_connexion_conf {

/**
  associe un mail a une configuration de connexion sso+ app
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mailPatern"] != undefined){
          
           this["mailPatern"] = obj["mailPatern"].toString() ;
           
        }
        
    
        
        if(obj["clientId"] != undefined){
          
           this["clientId"] = obj["clientId"].toString() ;
           
        }
        
    
        
        if(obj["redirectUri"] != undefined){
          
           this["redirectUri"] = obj["redirectUri"].toString() ;
           
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }
          
        }
        
    
        
        if(obj["application_instance"] != undefined){
          
          if(_.isString(obj["application_instance"])){
            this["application_instance"] = obj["application_instance"];
          }else if(obj["application_instance"]._id){
            this["application_instance"] = obj["application_instance"]._id ;
          }
          
        }
        
    
        
        if(obj["licence_service"] != undefined){
          
           this["licence_service"] = obj["licence_service"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "mail_connexion_conf" ;

        
              /**
        le patern du mail a matcher
        */
               public "mailPatern"?:string ;
              
       
              /**
        clientId du sso
        */
               public "clientId"?:string ;
              
       
              /**
        configuration de la redirection du sso
        */
               public "redirectUri"?:string ;
              
       
              /**
        end_client 
        */
               public "end_client"?:string ;
              
       
              /**
        application_instance
        */
               public "application_instance"?:string ;
              
       
              /**
        url du service de licence
        */
               public "licence_service"?:string ="https://licence-daesign.justplug.info/";
              
       


       

   }
