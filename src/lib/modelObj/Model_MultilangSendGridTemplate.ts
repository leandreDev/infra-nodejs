import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
export class Model_MultilangSendGridTemplate extends  Base  implements Interface.IMultilangSendGridTemplate {

/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["sendGridTemplates"] != undefined && obj["sendGridTemplates"] != null && _.isArray(obj["sendGridTemplates"])){
          

            this["sendGridTemplates"] = obj["sendGridTemplates"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["sendGridTemplate"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "MultilangSendGridTemplate" ;

        
              /**
        le nom du template
        */
               public "name":string ;
              
       
              /**
        liste des Template sendgrid
        */
               public "sendGridTemplates"?:Interface.IsendGridTemplate[];
              
       


       

   }
