import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  client ftps
*/
export class Model_service_client_ftp extends   Model_service   implements Interface.Iservice_client_ftp {

/**
  client ftps
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["host"] != undefined){
          
           this["host"] = obj["host"].toString() ;
           
        }
        
    
        
        if(obj["port"] != undefined){
          
           this["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
        
        if(obj["user"] != undefined){
          
           this["user"] = obj["user"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["downloadPath"] != undefined){
          
           this["downloadPath"] = obj["downloadPath"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_client_ftp" ;

        
              /**
        host
        */
               public "host":string ;
              
       
              /**
        port
        */
               public "port":number =21;
              
       
              /**
        user
        */
               public "user":string ;
              
       
              /**
        password
        */
               public "password":string ;
              
       
              /**
        downloadPath
        */
               public "downloadPath":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["host"] == null || target["host"] == undefined) ){
                  throw new Error(path + "host is required") ;
              }
              
              if(target["host"] != null && target["host"] != undefined ){
              
                let _host  = target["host"] ;
                

                 if(! _.isString(_host)){
                    throw new Error(path+"host is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["port"] == null || target["port"] == undefined) ){
                  throw new Error(path + "port is required") ;
              }
              
              if(target["port"] != null && target["port"] != undefined ){
              
                let _port  = target["port"] ;
                
                  if(! _.isNumber(_port)){
                      throw new Error(path+"port is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if( isCompleteObj && (target["user"] == null || target["user"] == undefined) ){
                  throw new Error(path + "user is required") ;
              }
              
              if(target["user"] != null && target["user"] != undefined ){
              
                let _user  = target["user"] ;
                

                 if(! _.isString(_user)){
                    throw new Error(path+"user is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["password"] == null || target["password"] == undefined) ){
                  throw new Error(path + "password is required") ;
              }
              
              if(target["password"] != null && target["password"] != undefined ){
              
                let _password  = target["password"] ;
                

                 if(! _.isString(_password)){
                    throw new Error(path+"password is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["downloadPath"] == null || target["downloadPath"] == undefined) ){
                  throw new Error(path + "downloadPath is required") ;
              }
              
              if(target["downloadPath"] != null && target["downloadPath"] != undefined ){
              
                let _downloadPath  = target["downloadPath"] ;
                

                 if(! _.isString(_downloadPath)){
                    throw new Error(path+"downloadPath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_client_ftp>{
        return Model_service_client_ftp.check(target, true, path).then(()=>{
          return new Model_service_client_ftp(target) ;
        })
      }

   }
