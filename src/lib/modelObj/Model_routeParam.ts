import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  paramètre d'une route
*/
export class Model_routeParam extends  Base  implements Interface.IrouteParam {

/**
  paramètre d'une route
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["paramName"] != undefined){
          
           this["paramName"] = obj["paramName"].toString() ;
           
        }
        
    
        
        if(obj["type"] != undefined){
          
           this["type"] = obj["type"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "routeParam" ;

        
              /**
        paramètre de la route
        */
               public "paramName":string ;
              
       
              /**
        type de paramétre
        */
               public "type"?:string ;
              
       


       

   }
