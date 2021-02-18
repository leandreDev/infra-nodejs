import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_mongo_expression_comp } from "./Model_mongo_expression_comp"


/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_in
*/
export class Model_mongo_expression_in extends   Model_mongo_expression_comp   implements Interface.Imongo_expression_in {

/**
  https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_in
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "mongo_expression_in" ;

        


       

   }