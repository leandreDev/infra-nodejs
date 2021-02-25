import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_mongo_expression_comp } from "./Model_mongo_expression_comp"


/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lt
*/
export class Model_mongo_expression_lt extends   Model_mongo_expression_comp   implements Interface.Imongo_expression_lt {

/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lt
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "mongo_expression_lt" ;

        


       

   }
