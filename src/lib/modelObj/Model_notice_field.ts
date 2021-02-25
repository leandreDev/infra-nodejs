import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  notice field
*/
export class Model_notice_field extends  Base  implements Interface.Inotice_field {

/**
  notice field
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["content"] != undefined){
          
           this["content"] = obj["content"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "notice_field" ;

        
              /**
        name of notices
        */
               public "name"?:string ;
              
       
              /**
        content
        */
               public "content"?:string ;
              
       


       

   }
