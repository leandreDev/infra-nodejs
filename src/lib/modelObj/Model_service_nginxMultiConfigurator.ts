import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service_nginxConfigurator } from "./Model_service_nginxConfigurator"


/**
  configuration d'un service nginx multi configuration
*/
export class Model_service_nginxMultiConfigurator extends   Model_service_nginxConfigurator   implements Interface.Iservice_nginxMultiConfigurator {

/**
  configuration d'un service nginx multi configuration
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["nginxUser"] != undefined){
          
           this["nginxUser"] = obj["nginxUser"].toString() ;
           
        }
        
    
        
        if(obj["serviceUrl"] != undefined){
          
           this["serviceUrl"] = obj["serviceUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientUrl"] != undefined){
          
           this["clientUrl"] = obj["clientUrl"].toString() ;
           
        }
        
    
        
        if(obj["appInstanceUrl"] != undefined){
          
           this["appInstanceUrl"] = obj["appInstanceUrl"].toString() ;
           
        }
        
    
        
        if(obj["appUrl"] != undefined){
          
           this["appUrl"] = obj["appUrl"].toString() ;
           
        }
        
    
        
        if(obj["configurationFile"] != undefined && obj["configurationFile"] != null && _.isArray(obj["configurationFile"])){
          

            this["configurationFile"] = obj["configurationFile"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["nginxConfigurationFile"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["confApplication"] != undefined && obj["confApplication"] != null && _.isArray(obj["confApplication"])){
          

            this["confApplication"] = obj["confApplication"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["nginxConfigurationFileApp"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "service_nginxMultiConfigurator" ;

        
              /**
         le login de l'utilisateur utilisé pour s'impersonifier
        */
               public "nginxUser"?:string ;
              
       
              /**
        l'url de la collection des services
        */
               public "serviceUrl"?:string ;
              
       
              /**
        url du service de client
        */
               public "clientUrl":string ;
              
       
              /**
        url du service d'application instance
        */
               public "appInstanceUrl"?:string ;
              
       
              /**
        url du service d'application instance
        */
               public "appUrl":string ;
              
       
              /**
        fichier de configuration a générer
        */
               public "configurationFile"?:Interface.InginxConfigurationFile[];
              
       
              /**
        liste des applications a publier
        */
               public "confApplication"?:Interface.InginxConfigurationFileApp[];
              
       


       

   }
