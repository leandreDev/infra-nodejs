import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_mongo_expression_comp } from "./Model_mongo_expression_comp"


/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq
*/
export class Model_mongo_expression_eq extends   Model_mongo_expression_comp   implements Interface.Imongo_expression_eq {

/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "mongo_expression_eq" ;

        


       

   }
