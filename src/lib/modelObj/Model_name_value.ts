import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  paire clef valeur
*/
export class Model_name_value extends  Base  implements Interface.Iname_value {

/**
  paire clef valeur
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["key"] != undefined){
          
           this["key"] = obj["key"].toString() ;
           
        }
        
    
        
        if(obj["value"] != undefined){
          
           this["value"] = obj["value"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "name_value" ;

        
              /**
        nom de la clef
        */
               public "key":string ;
              
       
              /**
        valeur associé a la clef
        */
               public "value"?:string ;
              
       


       

   }
