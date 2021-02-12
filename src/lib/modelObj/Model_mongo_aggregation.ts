import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



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
              
       


       

   }
