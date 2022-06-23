import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  c'est le couple application configuration 
*/
export class Model_application_instance extends  Base  implements Interface.Iapplication_instance {

/**
  c'est le couple application configuration 
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["application"] != undefined){
          
          if(_.isString(obj["application"])){
            this["application"] = obj["application"];
          }else if(obj["application"]._id){
            this["application"] = obj["application"]._id ;
          }else if((obj["application"]._bsontype && (obj["application"]._bsontype === 'ObjectID'){
              this["application"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["configuration"] != undefined){
          
          if(_.isString(obj["configuration"])){
            this["configuration"] = obj["configuration"];
          }else if(obj["configuration"]._id){
            this["configuration"] = obj["configuration"]._id ;
          }else if((obj["configuration"]._bsontype && (obj["configuration"]._bsontype === 'ObjectID'){
              this["configuration"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }else if((obj["end_client"]._bsontype && (obj["end_client"]._bsontype === 'ObjectID'){
              this["end_client"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["oidc_client"] != undefined){
          
          if(_.isString(obj["oidc_client"])){
            this["oidc_client"] = obj["oidc_client"];
          }else if(obj["oidc_client"]._id){
            this["oidc_client"] = obj["oidc_client"]._id ;
          }else if((obj["oidc_client"]._bsontype && (obj["oidc_client"]._bsontype === 'ObjectID'){
              this["oidc_client"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["css"] != undefined){
          
           this["css"] = obj["css"].toString() ;
           
        }
        
    
        
        if(obj["public_data"] != undefined){
          
           this["public_data"] = obj["public_data"] ;
          
        }
        
    
        
        if(obj["port"] != undefined){
          
           this["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "application_instance" ;

        
              /**
        le nom du couple app/config
        */
               public "name"?:string ;
              
       
              /**
        l'application représenté
        */
               public "application"?:string ;
              
       
              /**
        la configuration de l'application
        */
               public "configuration"?:string ;
              
       
              /**
        le end_client de l aplli
        */
               public "end_client":string ;
              
       
              /**
        le compte oidc du client pour la connection
        */
               public "oidc_client":string ;
              
       
              /**
        la css root de l'app
        */
               public "css"?:string ;
              
       
              /**
        data public
        */
               public "public_data"?:any ;
              
       
              /**
        port de publication
        */
               public "port"?:number =80;
              
       


       

   }
