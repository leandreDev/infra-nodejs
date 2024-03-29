import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_mongo_expression_logical } from "./Model_mongo_expression_logical"


/**
  https://docs.mongodb.com/manual/reference/operator/query/and/
*/
export class Model_mongo_expression_and extends   Model_mongo_expression_logical   implements Interface.Imongo_expression_and {

/**
  https://docs.mongodb.com/manual/reference/operator/query/and/
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["expression"] != undefined && obj["expression"] != null && _.isArray(obj["expression"])){
          

            this["expression"] = obj["expression"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["mongo_expression"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "mongo_expression_and" ;

        
              /**
        expression
        */
               public "expression":Interface.Imongo_expression[];
              
       


       

   }
