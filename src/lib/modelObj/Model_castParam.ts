import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  paramètre d'une querry qui doit être casté
*/
export class Model_castParam extends  Base  implements Interface.IcastParam {

/**
  paramètre d'une querry qui doit être casté
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["paramName"] != undefined){
          
           this["paramName"] = obj["paramName"].toString() ;
           
        }
        
    
        
        if(obj["type"] != undefined){
          
           this["type"] = obj["type"].toString() ;
           
        }
        
    
        
        if(obj["param"] != undefined){
          
           this["param"] = obj["param"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "castParam" ;

        
              /**
        paramètre a ajouter a l'objet ctx.params
        */
               public "paramName":string ;
              
       
              /**
        type de paramétre
        */
               public "type"?:string ;
              
       
              /**
        contexte a caster
        */
               public "param":string ;
              
       


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
           
              
              if( isCompleteObj && (target["param"] == null || target["param"] == undefined) ){
                  throw new Error(path + "param is required") ;
              }
              
              if(target["param"] != null && target["param"] != undefined ){
              
                let _param  = target["param"] ;
                

                 if(! _.isString(_param)){
                    throw new Error(path+"param is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_castParam>{
        return Model_castParam.check(target, true, path).then(()=>{
          return new Model_castParam(target) ;
        })
      }

   }
