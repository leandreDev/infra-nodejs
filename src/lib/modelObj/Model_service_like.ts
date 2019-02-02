import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service permettant de liker un objet de la base
*/
export class Model_service_like extends   Model_service   implements Interface.Iservice_like {

/**
  service permettant de liker un objet de la base
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["likeCollection"] != undefined){
          
           this["likeCollection"] = obj["likeCollection"].toString() ;
           
        }
        
    
        
        if(obj["noteCollection"] != undefined){
          
           this["noteCollection"] = obj["noteCollection"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_like" ;

        
              /**
        url de la collection des like
        */
               public "likeCollection":string ;
              
       
              /**
        url de la collection de notes
        */
               public "noteCollection":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["likeCollection"] == null || target["likeCollection"] == undefined) ){
                  throw new Error(path + "likeCollection is required") ;
              }
              
              if(target["likeCollection"] != null && target["likeCollection"] != undefined ){
              
                let _likeCollection  = target["likeCollection"] ;
                

                 if(! _.isString(_likeCollection)){
                    throw new Error(path+"likeCollection is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["noteCollection"] == null || target["noteCollection"] == undefined) ){
                  throw new Error(path + "noteCollection is required") ;
              }
              
              if(target["noteCollection"] != null && target["noteCollection"] != undefined ){
              
                let _noteCollection  = target["noteCollection"] ;
                

                 if(! _.isString(_noteCollection)){
                    throw new Error(path+"noteCollection is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_like>{
        return Model_service_like.check(target, true, path).then(()=>{
          return new Model_service_like(target) ;
        })
      }

   }
