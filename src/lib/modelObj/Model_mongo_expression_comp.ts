import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_mongo_expression } from "./Model_mongo_expression"


/**
  mongo_expression_comp
*/
export class Model_mongo_expression_comp extends   Model_mongo_expression   implements Interface.Imongo_expression_comp {

/**
  mongo_expression_comp
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["field"] != undefined){
          
           this["field"] = obj["field"].toString() ;
           
        }
        
    
        
        if(obj["value"] != undefined && obj["value"] != null && _.isArray(obj["value"])){
          
           this["value"] = obj["value"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["dataType"] != undefined){
          
           this["dataType"] = obj["dataType"].toString() ;
           
        }
        
    
        
        if(obj["isArray"] != undefined){
          
           this["isArray"] = new Boolean(obj["isArray"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "mongo_expression_comp" ;

        
              /**
        field name, for subDonc prop.fieldName
        */
               public "field"?:string ;
              
       
              /**
        valeur de l'égalité
        */
               public "value":string[];
              
       
              /**
        type de donnée a comparer
        */
               public "dataType":string ;
              
       
              /**
        la donnée est un tableau
        */
               public "isArray"?:boolean ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["field"] != null && target["field"] != undefined ){
              
                let _field  = target["field"] ;
                

                 if(! _.isString(_field)){
                    throw new Error(path+"field is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["value"] == null || target["value"] == undefined) ){
                  throw new Error(path + "value is required") ;
              }
              
              if(target["value"] != null && target["value"] != undefined ){
              
                target["value"].forEach((_value , index:number)=>{
                

                 if(! _.isString(_value)){
                    throw new Error(path+"value index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if( isCompleteObj && (target["dataType"] == null || target["dataType"] == undefined) ){
                  throw new Error(path + "dataType is required") ;
              }
              
              if(target["dataType"] != null && target["dataType"] != undefined ){
              
                let _dataType  = target["dataType"] ;
                

                 if(! _.isString(_dataType)){
                    throw new Error(path+"dataType is not a string") ;
                    
                  }
                  
                  
                    let _enum_dataType:string[] = ["string","number","date","boolean"] ;
                    if(_enum_dataType.indexOf(_dataType)==-1){
                        throw new Error(path+"dataType dont match one of string , number , date , boolean" ) ;
                        
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

      public static create(target:any, path:string=""):Promise<Model_mongo_expression_comp>{
        return Model_mongo_expression_comp.check(target, true, path).then(()=>{
          return new Model_mongo_expression_comp(target) ;
        })
      }

   }
