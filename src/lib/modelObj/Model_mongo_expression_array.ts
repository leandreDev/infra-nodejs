import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


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
              
       


       

   }
