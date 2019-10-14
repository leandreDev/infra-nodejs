import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  c'est une paire nom url
*/
export class Model_name_url extends  Base  implements Interface.Iname_url {

/**
  c'est une paire nom url
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["url"] != undefined){
          
           this["url"] = obj["url"].toString() ;
           
        }
        
    
        
        if(obj["refId"] != undefined){
          
           this["refId"] = obj["refId"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "name_url" ;

        
              /**
        nom du service
        */
               public "name":string ;
              
       
              /**
        url du service
        */
               public "url":string ;
              
       
              /**
        Id de l'objet
        */
               public "refId"?:string ;
              
       


       

   }
