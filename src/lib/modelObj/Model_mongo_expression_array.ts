import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_mongo_expression } from "./Model_mongo_expression"


/**
  mongo_expression_array
*/
export class Model_mongo_expression_array extends   Model_mongo_expression   implements Interface.Imongo_expression_array {

/**
  mongo_expression_array
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])){
          
           this["value"] = obj["value"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["valueType"] != undefined){
          
           this["valueType"] = obj["valueType"].toString() ;
           
        }
        
    
        
        if(obj["isArray"] != undefined){
          
           this["isArray"] = new Boolean(obj["isArray"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "mongo_expression_array" ;

        
              /**
        value
        */
               public "value"?:string[];
              
       
              /**
        valueType
        */
               public "valueType"?:string ;
              
       
              /**
        isArray
        */
               public "isArray"?:boolean =false;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["value"] != null && target["value"] != undefined ){
              
                target["value"].forEach((_value , index:number)=>{
                

                 if(! _.isString(_value)){
                    throw new Error(path+"value index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if(target["valueType"] != null && target["valueType"] != undefined ){
              
                let _valueType  = target["valueType"] ;
                

                 if(! _.isString(_valueType)){
                    throw new Error(path+"valueType is not a string") ;
                    
                  }
                  
                  
                    let _enum_valueType:string[] = ["string","number","boolean","date"] ;
                    if(_enum_valueType.indexOf(_valueType)==-1){
                        throw new Error(path+"valueType dont match one of string , number , boolean , date" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["isArray"] != null && target["isArray"] != undefined ){
              
                let _isArray  = target["isArray"] ;
                
                  if(! _.isBoolean(_isArray)){
                    throw new Error(path+"isArray is not a boolean") ;
                    
                  }
                

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mongo_expression_array>{
        return Model_mongo_expression_array.check(target, true, path).then(()=>{
          return new Model_mongo_expression_array(target) ;
        })
      }

   }
