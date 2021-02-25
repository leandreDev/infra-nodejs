import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  c'est la configuration d'une application Client
*/
export class Model_application_configuration_appClient extends   Model_application_configuration   implements Interface.Iapplication_configuration_appClient {

/**
  c'est la configuration d'une application Client
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["configurationUrlDb"] != undefined){
          
           this["configurationUrlDb"] = obj["configurationUrlDb"].toString() ;
           
        }
        
    
        
        if(obj["urlBase"] != undefined){
          
           this["urlBase"] = obj["urlBase"].toString() ;
           
        }
        
    
        
        if(obj["signinUrl"] != undefined){
          
           this["signinUrl"] = obj["signinUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceSessionUrl"] != undefined){
          
           this["serviceSessionUrl"] = obj["serviceSessionUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientServiceUrl"] != undefined){
          
           this["clientServiceUrl"] = obj["clientServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["aclTemplate"] != undefined){
          
            if(obj["aclTemplate"]._class){
              this["aclTemplate"] =  new Index[obj["aclTemplate"]._class](obj["aclTemplate"]) ;
            }else{
              this["aclTemplate"] =  new Index["_acl"](obj["aclTemplate"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_appClient" ;

        
              /**
        url de la bd de l'application
        */
               public "configurationUrlDb":string ;
              
       
              /**
        url racine des services
        */
               public "urlBase":string ;
              
       
              /**
        url du service d'enregistrement d'utilisateur
        */
               public "signinUrl":string ;
              
       
              /**
        url du service de gestion des sessions
        */
               public "serviceSessionUrl":string ;
              
       
              /**
        url du service d'acces au info client
        */
               public "clientServiceUrl":string ;
              
       
              /**
        template des acl
        */
               public "aclTemplate"?:Interface.I_acl;
              
       


       

   }
