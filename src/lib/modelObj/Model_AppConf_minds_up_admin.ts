import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config de l'app minds up admin
*/
export class Model_AppConf_minds_up_admin extends   Model_application_configuration   implements Interface.IAppConf_minds_up_admin {

/**
  config de l'app minds up admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceMindsUpUrl"] != undefined){
          
           this["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString() ;
           
        }
        
    
        
        if(obj["rgpd"] != undefined){
          
           this["rgpd"] = obj["rgpd"].toString() ;
           
        }
        
    
        
        if(obj["uploadUrl"] != undefined){
          
           this["uploadUrl"] = obj["uploadUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "AppConf_minds_up_admin" ;

        
              /**
        url de l'api
        */
               public "apiUrl":string ;
              
       
              /**
        url du service métier mindsUp
        */
               public "serviceMindsUpUrl":string ;
              
       
              /**
        texte a afficher pour valider la rgpd
        */
               public "rgpd"?:string ;
              
       
              /**
        url de l'api d'upload
        */
               public "uploadUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["apiUrl"] == null || target["apiUrl"] == undefined) ){
                  throw new Error(path + "apiUrl is required") ;
              }
              
              if(target["apiUrl"] != null && target["apiUrl"] != undefined ){
              
                let _apiUrl  = target["apiUrl"] ;
                

                 if(! _.isString(_apiUrl)){
                    throw new Error(path+"apiUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["serviceMindsUpUrl"] == null || target["serviceMindsUpUrl"] == undefined) ){
                  throw new Error(path + "serviceMindsUpUrl is required") ;
              }
              
              if(target["serviceMindsUpUrl"] != null && target["serviceMindsUpUrl"] != undefined ){
              
                let _serviceMindsUpUrl  = target["serviceMindsUpUrl"] ;
                

                 if(! _.isString(_serviceMindsUpUrl)){
                    throw new Error(path+"serviceMindsUpUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["rgpd"] != null && target["rgpd"] != undefined ){
              
                let _rgpd  = target["rgpd"] ;
                

                 if(! _.isString(_rgpd)){
                    throw new Error(path+"rgpd is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["uploadUrl"] == null || target["uploadUrl"] == undefined) ){
                  throw new Error(path + "uploadUrl is required") ;
              }
              
              if(target["uploadUrl"] != null && target["uploadUrl"] != undefined ){
              
                let _uploadUrl  = target["uploadUrl"] ;
                

                 if(! _.isString(_uploadUrl)){
                    throw new Error(path+"uploadUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_AppConf_minds_up_admin>{
        return Model_AppConf_minds_up_admin.check(target, true, path).then(()=>{
          return new Model_AppConf_minds_up_admin(target) ;
        })
      }

   }
