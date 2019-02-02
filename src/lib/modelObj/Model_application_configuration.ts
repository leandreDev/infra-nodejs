import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  c'est la configuration d'une application
*/
export class Model_application_configuration extends  Base  implements Interface.Iapplication_configuration {

/**
  c'est la configuration d'une application
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])){
          
          this["services"] = obj["services"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
        
        if(obj["appName"] != undefined){
          
           this["appName"] = obj["appName"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration" ;

        
              /**
        le nom de la configuration
        */
               public "name"?:string ;
              
       
              /**
        configurations de services
        */
               public "services"?:string[] ;
              
       
              /**
        nom de l'application a afficher
        */
               public "appName"?:string ;
              
       


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
           
              
              if(target["services"] != null && target["services"] != undefined ){
              
                  target["services"].forEach((_services , index:number)=>{
                  
                  if( ! _.isString(_services)){
                   throw new Error(path + "services is not a string") ;
                  }
                  });

              
              
           }
           
              
              if(target["appName"] != null && target["appName"] != undefined ){
              
                let _appName  = target["appName"] ;
                

                 if(! _.isString(_appName)){
                    throw new Error(path+"appName is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration>{
        return Model_application_configuration.check(target, true, path).then(()=>{
          return new Model_application_configuration(target) ;
        })
      }

   }
