import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



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
          }
          
        }
        
    
        
        if(obj["configuration"] != undefined){
          
          if(_.isString(obj["configuration"])){
            this["configuration"] = obj["configuration"];
          }else if(obj["configuration"]._id){
            this["configuration"] = obj["configuration"]._id ;
          }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }
          
        }
        
    
        
        if(obj["oidc_client"] != undefined){
          
          if(_.isString(obj["oidc_client"])){
            this["oidc_client"] = obj["oidc_client"];
          }else if(obj["oidc_client"]._id){
            this["oidc_client"] = obj["oidc_client"]._id ;
          }
          
        }
        
    
        
        if(obj["css"] != undefined){
          
           this["css"] = obj["css"].toString() ;
           
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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["application"] != null && target["application"] != undefined ){
              
                  let _application  = target["application"] ;
                  
                  if( ! _.isString(_application)){
                   throw new Error(path + "application is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["configuration"] != null && target["configuration"] != undefined ){
              
                  let _configuration  = target["configuration"] ;
                  
                  if( ! _.isString(_configuration)){
                   throw new Error(path + "configuration is not a string") ;
                  }
                  

              
              
           }
           
              
              if( isCompleteObj && (target["end_client"] == null || target["end_client"] == undefined) ){
                  throw new Error(path + "end_client is required") ;
              }
              
              if(target["end_client"] != null && target["end_client"] != undefined ){
              
                  let _end_client  = target["end_client"] ;
                  
                  if( ! _.isString(_end_client)){
                   throw new Error(path + "end_client is not a string") ;
                  }
                  

              
              
           }
           
              
              if( isCompleteObj && (target["oidc_client"] == null || target["oidc_client"] == undefined) ){
                  throw new Error(path + "oidc_client is required") ;
              }
              
              if(target["oidc_client"] != null && target["oidc_client"] != undefined ){
              
                  let _oidc_client  = target["oidc_client"] ;
                  
                  if( ! _.isString(_oidc_client)){
                   throw new Error(path + "oidc_client is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["css"] != null && target["css"] != undefined ){
              
                let _css  = target["css"] ;
                

                 if(! _.isString(_css)){
                    throw new Error(path+"css is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_instance>{
        return Model_application_instance.check(target, true, path).then(()=>{
          return new Model_application_instance(target) ;
        })
      }

   }
