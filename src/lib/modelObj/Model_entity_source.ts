import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  association d'une entité et de l'url de son service
*/
export class Model_entity_source extends  Base  implements Interface.Ientity_source {

/**
  association d'une entité et de l'url de son service
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["url"] != undefined){
          
           this["url"] = obj["url"].toString() ;
           
        }
        
    
        
        if(obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])){
          
           this["entityName"] = obj["entityName"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "entity_source" ;

        
              /**
        url du service
        */
               public "url"?:string ;
              
       
              /**
        nom de l'entité
        */
               public "entityName"?:string[];
              
       


       

   }
