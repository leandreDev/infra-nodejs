import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  paramètre d'une querry qui doit être casté
*/
export class Model_castParam extends  Base  implements Interface.IcastParam {

/**
  paramètre d'une querry qui doit être casté
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["paramName"] != undefined){
          
           this["paramName"] = obj["paramName"].toString() ;
           
        }
        
    
        
        if(obj["type"] != undefined){
          
           this["type"] = obj["type"].toString() ;
           
        }
        
    
        
        if(obj["param"] != undefined){
          
           this["param"] = obj["param"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "castParam" ;

        
              /**
        paramètre a ajouter a l'objet ctx.params
        */
               public "paramName":string ;
              
       
              /**
        type de paramétre
        */
               public "type"?:string ;
              
       
              /**
        contexte a caster
        */
               public "param":string ;
              
       


       

   }
