import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  template send grid
*/
export class Model_sendGridTemplate extends  Base  implements Interface.IsendGridTemplate {

/**
  template send grid
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lang"] != undefined){
          
           this["lang"] = obj["lang"].toString() ;
           
        }
        
    
        
        if(obj["templateId"] != undefined){
          
           this["templateId"] = obj["templateId"].toString() ;
           
        }
        
    
        
        if(obj["parametre"] != undefined && obj["parametre"] != null && _.isArray(obj["parametre"])){
          

            this["parametre"] = obj["parametre"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_value"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["dynamic_template_data"] != undefined && obj["dynamic_template_data"] != null && _.isArray(obj["dynamic_template_data"])){
          

            this["dynamic_template_data"] = obj["dynamic_template_data"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_value"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "sendGridTemplate" ;

        
              /**
        langue du template
        */
               public "lang":string ;
              
       
              /**
        id du template de mail chez sendGrid
        */
               public "templateId":string ;
              
       
              /**
        liste des substitutions a réaliser sur le template
        */
               public "parametre"?:Interface.Iname_value[];
              
       
              /**
        dynamic_template_data de send grid
        */
               public "dynamic_template_data"?:Interface.Iname_value[];
              
       


       

   }
