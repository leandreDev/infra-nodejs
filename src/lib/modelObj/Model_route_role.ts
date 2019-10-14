import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  paire route et role
*/
export class Model_route_role extends  Base  implements Interface.Iroute_role {

/**
  paire route et role
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["route"] != undefined){
          
           this["route"] = obj["route"].toString() ;
           
        }
        
    
        
        if(obj["role"] != undefined && obj["role"] != null && _.isArray(obj["role"])){
          
           this["role"] = obj["role"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "route_role" ;

        
              /**
        route à protéger
        */
               public "route"?:string ;
              
       
              /**
        liste des roles
        */
               public "role"?:string[];
              
       


       

   }
