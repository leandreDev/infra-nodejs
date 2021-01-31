import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  la conf ferrand
*/
export class Model_application_configuration_ferrand extends   Model_application_configuration   implements Interface.Iapplication_configuration_ferrand {

/**
  la conf ferrand
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_ferrand" ;

        
              /**
        url du service
        */
               public "apiUrl"?:string ;
              
       
              /**
        bddUrl
        */
               public "bddUrl"?:string ;
              
       


       

   }
