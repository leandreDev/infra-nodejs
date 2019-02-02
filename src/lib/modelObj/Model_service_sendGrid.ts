import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  permet d'envoyer des mail via l'api send grid v3
*/
export class Model_service_sendGrid extends   Model_service   implements Interface.Iservice_sendGrid {

/**
  permet d'envoyer des mail via l'api send grid v3
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["sendGridApiKey"] != undefined){
          
           this["sendGridApiKey"] = obj["sendGridApiKey"].toString() ;
           
        }
        
    
        
        if(obj["messageUrl"] != undefined){
          
           this["messageUrl"] = obj["messageUrl"].toString() ;
           
        }
        
    
        
        if(obj["userUrl"] != undefined){
          
           this["userUrl"] = obj["userUrl"].toString() ;
           
        }
        
    
        
        if(obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])){
          
          this["templates"] = obj["templates"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
  }
  

    public _class:string  = "service_sendGrid" ;

        
              /**
        la clef d'api de sendgrid
        */
               public "sendGridApiKey":string ;
              
       
              /**
        url de la collection de message pour les sauvegarder
        */
               public "messageUrl":string ;
              
       
              /**
        l'url de la collection de user
        */
               public "userUrl":string ;
              
       
              /**
        liste des templates 
        */
               public "templates"?:string[] ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["sendGridApiKey"] == null || target["sendGridApiKey"] == undefined) ){
                  throw new Error(path + "sendGridApiKey is required") ;
              }
              
              if(target["sendGridApiKey"] != null && target["sendGridApiKey"] != undefined ){
              
                let _sendGridApiKey  = target["sendGridApiKey"] ;
                

                 if(! _.isString(_sendGridApiKey)){
                    throw new Error(path+"sendGridApiKey is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["messageUrl"] == null || target["messageUrl"] == undefined) ){
                  throw new Error(path + "messageUrl is required") ;
              }
              
              if(target["messageUrl"] != null && target["messageUrl"] != undefined ){
              
                let _messageUrl  = target["messageUrl"] ;
                

                 if(! _.isString(_messageUrl)){
                    throw new Error(path+"messageUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["userUrl"] == null || target["userUrl"] == undefined) ){
                  throw new Error(path + "userUrl is required") ;
              }
              
              if(target["userUrl"] != null && target["userUrl"] != undefined ){
              
                let _userUrl  = target["userUrl"] ;
                

                 if(! _.isString(_userUrl)){
                    throw new Error(path+"userUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["templates"] != null && target["templates"] != undefined ){
              
                  target["templates"].forEach((_templates , index:number)=>{
                  
                  if( ! _.isString(_templates)){
                   throw new Error(path + "templates is not a string") ;
                  }
                  });

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_sendGrid>{
        return Model_service_sendGrid.check(target, true, path).then(()=>{
          return new Model_service_sendGrid(target) ;
        })
      }

   }
