import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  initalisation des listes
*/
export class Model_dataTableInit extends  Base  implements Interface.IdataTableInit {

/**
  initalisation des listes
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])){
          
           this["fieldsNames"] = obj["fieldsNames"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["sortField"] != undefined){
          
           this["sortField"] = obj["sortField"].toString() ;
           
        }
        
    
        
        if(obj["direction"] != undefined){
          
           this["direction"] = obj["direction"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "dataTableInit" ;

        
              /**
        liste des champs a afficher 
        */
               public "fieldsNames"?:string[];
              
       
              /**
        champ a trier 
        */
               public "sortField"?:string ;
              
       
              /**
        direction du tri
        */
               public "direction"?:string ;
              
       


       

   }
