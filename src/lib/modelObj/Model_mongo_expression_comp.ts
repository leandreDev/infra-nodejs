import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


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
              
       


       

   }
