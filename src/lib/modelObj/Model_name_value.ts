import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  paire clef valeur
*/
export class Model_name_value extends  Base  implements Interface.Iname_value {

/**
  paire clef valeur
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["key"] != undefined){
          
           this["key"] = obj["key"].toString() ;
           
        }
        
    
        
        if(obj["value"] != undefined){
          
           this["value"] = obj["value"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "name_value" ;

        
              /**
        nom de la clef
        */
               public "key":string ;
              
       
              /**
        valeur associé a la clef
        */
               public "value"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["key"] == null || target["key"] == undefined) ){
                  throw new Error(path + "key is required") ;
              }
              
              if(target["key"] != null && target["key"] != undefined ){
              
                let _key  = target["key"] ;
                

                 if(! _.isString(_key)){
                    throw new Error(path+"key is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["value"] != null && target["value"] != undefined ){
              
                let _value  = target["value"] ;
                

                 if(! _.isString(_value)){
                    throw new Error(path+"value is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_name_value>{
        return Model_name_value.check(target, true, path).then(()=>{
          return new Model_name_value(target) ;
        })
      }

   }
