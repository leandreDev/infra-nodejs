import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  paramètre d'une route
*/
export class Model_routeParam extends  Base  implements Interface.IrouteParam {

/**
  paramètre d'une route
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["paramName"] != undefined){
          
           this["paramName"] = obj["paramName"].toString() ;
           
        }
        
    
        
        if(obj["type"] != undefined){
          
           this["type"] = obj["type"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "routeParam" ;

        
              /**
        paramètre de la route
        */
               public "paramName":string ;
              
       
              /**
        type de paramétre
        */
               public "type"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["paramName"] == null || target["paramName"] == undefined) ){
                  throw new Error(path + "paramName is required") ;
              }
              
              if(target["paramName"] != null && target["paramName"] != undefined ){
              
                let _paramName  = target["paramName"] ;
                

                 if(! _.isString(_paramName)){
                    throw new Error(path+"paramName is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["type"] != null && target["type"] != undefined ){
              
                let _type  = target["type"] ;
                

                 if(! _.isString(_type)){
                    throw new Error(path+"type is not a string") ;
                    
                  }
                  
                  
                    let _enum_type:string[] = ["string","boolean","number","date","objectId"] ;
                    if(_enum_type.indexOf(_type)==-1){
                        throw new Error(path+"type dont match one of string , boolean , number , date , objectId" ) ;
                        
                    }
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_routeParam>{
        return Model_routeParam.check(target, true, path).then(()=>{
          return new Model_routeParam(target) ;
        })
      }

   }
