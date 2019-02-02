import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  les opérateurs d'aggregation du pipe de mongo
*/
export class Model_mongo_aggregation extends  Base  implements Interface.Imongo_aggregation {

/**
  les opérateurs d'aggregation du pipe de mongo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["from"] != undefined){
          
           if(_.isString(obj["from"])){
              this["from"] = obj["from"] ;
            }else if(obj["from"]._id){
              this["from"] = obj["from"]._id ;
            }
          
        }
        
    
  }
  

    public _class:string  = "mongo_aggregation" ;

        
              /**
        Target collection for the $graphLookup operation to search, recursively matching the connectFromField to the connectToField. The from collection cannot be sharded and must be in the same database as any other collections used in the operation.
        */
               public "from"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["from"] != null && target["from"] != undefined ){
              
                  let _from  = target["from"] ;
                  
                  if( ! _.isString(_from)){
                      if( ! _.isString(_from)){
                       throw new Error(path + "from is not a string") ;
                      }
                  }
                  
               
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mongo_aggregation>{
        return Model_mongo_aggregation.check(target, true, path).then(()=>{
          return new Model_mongo_aggregation(target) ;
        })
      }

   }
