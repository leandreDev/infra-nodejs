import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  liste des applications
*/
export class Model_application extends  Base  implements Interface.Iapplication {

/**
  liste des applications
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           this["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["depot"] != undefined){
          
           this["depot"] = obj["depot"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application" ;

        
              /**
        le nom de l'application
        */
               public "name"?:string ;
              
       
              /**
        la description public de l'appli
        */
               public "description"?:string ;
              
       
              /**
        nom du depot de l'app
        */
               public "depot"?:string ;
              
       


       

   }
