import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  template lodash + nom
*/
export class Model_TemplateLodash extends  Base  implements Interface.ITemplateLodash {

/**
  template lodash + nom
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["template"] != undefined){
          
           this["template"] = obj["template"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "TemplateLodash" ;

        
              /**
        nom du template
        */
               public "name":string ;
              
       
              /**
        contenu du template
        */
               public "template":string ;
              
       


       

   }
