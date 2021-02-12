import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  c'est un service en charge de valider les licences et retourner les configurations des applications web
*/
export class Model_service_licence_token extends   Model_service   implements Interface.Iservice_licence_token {

/**
  c'est un service en charge de valider les licences et retourner les configurations des applications web
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["licenceUrl"] != undefined){
          
           this["licenceUrl"] = obj["licenceUrl"].toString() ;
           
        }
        
    
        
        if(obj["application_instanceUrl"] != undefined){
          
           this["application_instanceUrl"] = obj["application_instanceUrl"].toString() ;
           
        }
        
    
        
        if(obj["tockenDuration"] != undefined){
          
           this["tockenDuration"] = new Number(obj["tockenDuration"]).valueOf();
          
        }
        
    
        
        if(obj["sso_well-known"] != undefined){
          
           this["sso_well-known"] = obj["sso_well-known"].toString() ;
           
        }
        
    
        
        if(obj["certificates"] != undefined && obj["certificates"] != null && _.isArray(obj["certificates"])){
          
          this["certificates"] = obj["certificates"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }else if(value._bsontype && value._bsontype === 'ObjectID'){
                return `${value}` ;
            }
          })
          
          
        }
        
    
        
        if(obj["end_clientUrl"] != undefined){
          
           this["end_clientUrl"] = obj["end_clientUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_licence_token" ;

        
              /**
        l'url du la base hébergeant les licences
        */
               public "licenceUrl"?:string ;
              
       
              /**
        l'url de la base contenant les instances d'application
        */
               public "application_instanceUrl"?:string ;
              
       
              /**
        durée du token d’accès aux services
        */
               public "tockenDuration"?:number ;
              
       
              /**
        l'url de la configuration du serveur sso 
        */
               public "sso_well-known"?:string ;
              
       
              /**
        liste des certificats
        */
               public "certificates"?:string[] ;
              
       
              /**
        url de la collection endClient
        */
               public "end_clientUrl"?:string ;
              
       


       

   }
