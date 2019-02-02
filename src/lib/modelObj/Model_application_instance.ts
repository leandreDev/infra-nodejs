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
        
    
        
        if(obj["users"] != undefined && obj["users"] != null && _.isArray(obj["users"])){
          
          this["users"] = obj["users"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
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
        les utilisateurs
        */
               public "users"?:string[] ;
              
       


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
           
              
              if(target["users"] != null && target["users"] != undefined ){
              
                  target["users"].forEach((_users , index:number)=>{
                  
                  if( ! _.isString(_users)){
                   throw new Error(path + "users is not a string") ;
                  }
                  });

              
              
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
