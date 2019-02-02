import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  mongo_queryfilter
*/
export class Model_mongo_queryfilter extends  Base  implements Interface.Imongo_queryfilter {

/**
  mongo_queryfilter
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "mongo_queryfilter" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mongo_queryfilter>{
        return Model_mongo_queryfilter.check(target, true, path).then(()=>{
          return new Model_mongo_queryfilter(target) ;
        })
      }

   }
