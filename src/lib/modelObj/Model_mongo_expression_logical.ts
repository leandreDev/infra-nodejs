import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_mongo_expression } from "./Model_mongo_expression"


/**
  Logical Query Operators
*/
export class Model_mongo_expression_logical extends   Model_mongo_expression   implements Interface.Imongo_expression_logical {

/**
  Logical Query Operators
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "mongo_expression_logical" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mongo_expression_logical>{
        return Model_mongo_expression_logical.check(target, true, path).then(()=>{
          return new Model_mongo_expression_logical(target) ;
        })
      }

   }
