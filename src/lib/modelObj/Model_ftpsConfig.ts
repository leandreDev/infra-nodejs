import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  configuration pour un service sftp
*/
export class Model_ftpsConfig extends  Base  implements Interface.IftpsConfig {

/**
  configuration pour un service sftp
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["port"] != undefined){
          
           this["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
        
        if(obj["certPath"] != undefined){
          
           this["certPath"] = obj["certPath"].toString() ;
           
        }
        
    
        
        if(obj["folderPath"] != undefined){
          
           this["folderPath"] = obj["folderPath"].toString() ;
           
        }
        
    
        
        if(obj["login"] != undefined){
          
           this["login"] = obj["login"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["newFileHook"] != undefined){
          
            if(obj._class){
              this["newFileHook"] =  new Index[obj._class](obj["newFileHook"]) ;
            }else{
              this["newFileHook"] =  new Index["Request"](obj["newFileHook"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "ftpsConfig" ;

        
              /**
        port sftp
        */
               public "port":number ;
              
       
              /**
        private certifaicate cert
        */
               public "certPath":string ;
              
       
              /**
        file folder path
        */
               public "folderPath":string ;
              
       
              /**
        login for ftp
        */
               public "login":string ;
              
       
              /**
        hash of password
        */
               public "password"?:string ;
              
       
              /**
        hook when new file create
        */
               public "newFileHook"?:Interface.IRequest;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["port"] == null || target["port"] == undefined) ){
                  throw new Error(path + "port is required") ;
              }
              
              if(target["port"] != null && target["port"] != undefined ){
              
                let _port  = target["port"] ;
                
                  if(! _.isNumber(_port)){
                      throw new Error(path+"port is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if( isCompleteObj && (target["certPath"] == null || target["certPath"] == undefined) ){
                  throw new Error(path + "certPath is required") ;
              }
              
              if(target["certPath"] != null && target["certPath"] != undefined ){
              
                let _certPath  = target["certPath"] ;
                

                 if(! _.isString(_certPath)){
                    throw new Error(path+"certPath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["folderPath"] == null || target["folderPath"] == undefined) ){
                  throw new Error(path + "folderPath is required") ;
              }
              
              if(target["folderPath"] != null && target["folderPath"] != undefined ){
              
                let _folderPath  = target["folderPath"] ;
                

                 if(! _.isString(_folderPath)){
                    throw new Error(path+"folderPath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["login"] == null || target["login"] == undefined) ){
                  throw new Error(path + "login is required") ;
              }
              
              if(target["login"] != null && target["login"] != undefined ){
              
                let _login  = target["login"] ;
                

                 if(! _.isString(_login)){
                    throw new Error(path+"login is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["password"] != null && target["password"] != undefined ){
              
                let _password  = target["password"] ;
                

                 if(! _.isString(_password)){
                    throw new Error(path+"password is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["newFileHook"] != null && target["newFileHook"] != undefined ){
              
                  let _newFileHook  = target["newFileHook"] ;
                  
                  
                    promArr.push( Index["Request"].check(_newFileHook, isCompleteObj , path+"newFileHook.")
                      .catch((err)=>{
                        throw new Error(path+"newFileHook is not ") ;
                        

                      }) )
                  if(_newFileHook._class != null && _newFileHook._class != undefined){
                    promArr.push( Index[_newFileHook._class].check(_newFileHook, isCompleteObj , path+"newFileHook.")
                      .catch((err)=>{
                        throw new Error(path+"newFileHook is not a " + _newFileHook._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_ftpsConfig>{
        return Model_ftpsConfig.check(target, true, path).then(()=>{
          return new Model_ftpsConfig(target) ;
        })
      }

   }
