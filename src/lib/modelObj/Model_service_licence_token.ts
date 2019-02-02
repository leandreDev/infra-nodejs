import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["licenceUrl"] != null && target["licenceUrl"] != undefined ){
              
                let _licenceUrl  = target["licenceUrl"] ;
                

                 if(! _.isString(_licenceUrl)){
                    throw new Error(path+"licenceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["application_instanceUrl"] != null && target["application_instanceUrl"] != undefined ){
              
                let _application_instanceUrl  = target["application_instanceUrl"] ;
                

                 if(! _.isString(_application_instanceUrl)){
                    throw new Error(path+"application_instanceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["tockenDuration"] != null && target["tockenDuration"] != undefined ){
              
                let _tockenDuration  = target["tockenDuration"] ;
                
                  if(! _.isNumber(_tockenDuration)){
                      throw new Error(path+"tockenDuration is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["sso_well-known"] != null && target["sso_well-known"] != undefined ){
              
                let _sso_wellknown  = target["sso_well-known"] ;
                

                 if(! _.isString(_sso_wellknown)){
                    throw new Error(path+"sso_well-known is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["certificates"] != null && target["certificates"] != undefined ){
              
                  target["certificates"].forEach((_certificates , index:number)=>{
                  
                  if( ! _.isString(_certificates)){
                   throw new Error(path + "certificates is not a string") ;
                  }
                  });

              
              
           }
           
              
              if(target["end_clientUrl"] != null && target["end_clientUrl"] != undefined ){
              
                let _end_clientUrl  = target["end_clientUrl"] ;
                

                 if(! _.isString(_end_clientUrl)){
                    throw new Error(path+"end_clientUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_licence_token>{
        return Model_service_licence_token.check(target, true, path).then(()=>{
          return new Model_service_licence_token(target) ;
        })
      }

   }
