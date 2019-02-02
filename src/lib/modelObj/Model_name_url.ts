import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  c'est une paire nom url
*/
export class Model_name_url extends  Base  implements Interface.Iname_url {

/**
  c'est une paire nom url
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["url"] != undefined){
          
           this["url"] = obj["url"].toString() ;
           
        }
        
    
        
        if(obj["refId"] != undefined){
          
           this["refId"] = obj["refId"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "name_url" ;

        
              /**
        nom du service
        */
               public "name":string ;
              
       
              /**
        url du service
        */
               public "url":string ;
              
       
              /**
        Id de l'objet
        */
               public "refId"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["url"] == null || target["url"] == undefined) ){
                  throw new Error(path + "url is required") ;
              }
              
              if(target["url"] != null && target["url"] != undefined ){
              
                let _url  = target["url"] ;
                

                 if(! _.isString(_url)){
                    throw new Error(path+"url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["refId"] != null && target["refId"] != undefined ){
              
                let _refId  = target["refId"] ;
                

                 if(! _.isString(_refId)){
                    throw new Error(path+"refId is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_name_url>{
        return Model_name_url.check(target, true, path).then(()=>{
          return new Model_name_url(target) ;
        })
      }

   }
